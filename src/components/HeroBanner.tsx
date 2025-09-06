import React, { useState, useEffect } from 'react';
import { Play, Plus, Info } from 'lucide-react';

interface Anime {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  episodes: number;
  status: string;
}

interface HeroBannerProps {
  featuredAnime: Anime[];
}

const HeroBanner: React.FC<HeroBannerProps> = ({ featuredAnime }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (featuredAnime.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featuredAnime.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [featuredAnime.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % featuredAnime.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + featuredAnime.length) % featuredAnime.length);
  };

  if (featuredAnime.length === 0) return null;

  const currentAnime = featuredAnime[currentSlide];

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Images with Transition */}
      {featuredAnime.map((anime, index) => (
        <div
          key={anime.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${anime.image})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {currentAnime.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-white font-semibold">{currentAnime.rating}</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <span className="text-gray-300">{currentAnime.episodes} Episodes</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <span className="text-green-400 font-semibold">{currentAnime.status}</span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-200 mb-8 leading-relaxed line-clamp-3">
              {currentAnime.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center space-x-3 px-8 py-4 text-white rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
                <Play className="w-6 h-6" fill="white" />
                <span>Watch Now</span>
              </button>
              <button className="flex items-center justify-center space-x-3 px-8 py-4 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 border border-gray-600 transition-all duration-300">
                <Plus className="w-6 h-6" />
                <span>Add to List</span>
              </button>
              <button className="flex items-center justify-center space-x-3 px-8 py-4 bg-transparent text-white rounded-full font-semibold hover:bg-gray-800 border border-gray-600 transition-all duration-300">
                <Info className="w-6 h-6" />
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {featuredAnime.length > 1 && (
        <>
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {featuredAnime.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {featuredAnime.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroBanner;