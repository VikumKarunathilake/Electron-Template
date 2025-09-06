import React from 'react';
import { X, Play, Plus, Star, Calendar, Clock, Users } from 'lucide-react';

interface Episode {
  number: number;
  title: string;
  duration: string;
  thumbnail: string;
}

interface Anime {
  id: string;
  title: string;
  image: string;
  rating: number;
  episodes: number;
  status: string;
  genre: string;
  description?: string;
  year?: number;
  studio?: string;
  director?: string;
}

interface AnimeModalProps {
  anime: Anime | null;
  isOpen: boolean;
  onClose: () => void;
}

const AnimeModal: React.FC<AnimeModalProps> = ({ anime, isOpen, onClose }) => {
  if (!isOpen || !anime) return null;

  // Mock episode data
  const episodes: Episode[] = Array.from({ length: Math.min(anime.episodes, 24) }, (_, i) => ({
    number: i + 1,
    title: `Episode ${i + 1}`,
    duration: '24:00',
    thumbnail: anime.image
  }));

  const relatedAnimes = [
    { id: '1', title: 'Related Anime 1', image: anime.image },
    { id: '2', title: 'Related Anime 2', image: anime.image },
    { id: '3', title: 'Related Anime 3', image: anime.image },
    { id: '4', title: 'Related Anime 4', image: anime.image },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto">
      <div className="bg-gray-900 rounded-2xl w-full max-w-6xl my-8 shadow-2xl border border-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">Anime Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-300"
          >
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="p-6">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* Cover Image */}
            <div className="flex-shrink-0">
              <img 
                src={anime.image} 
                alt={anime.title}
                className="w-full lg:w-80 aspect-[3/4] object-cover rounded-xl"
              />
            </div>

            {/* Details */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-4">{anime.title}</h1>
              
              {/* Rating and Meta */}
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  <span className="text-white font-semibold text-lg">{anime.rating}</span>
                  <span className="text-gray-400">/10</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar className="w-5 h-5" />
                  <span>{anime.year || 2024}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Users className="w-5 h-5" />
                  <span>{anime.studio || 'Studio MAPPA'}</span>
                </div>
              </div>

              {/* Status and Genre */}
              <div className="flex items-center space-x-4 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  anime.status === 'Ongoing' || anime.status === 'Currently Airing'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                }`}>
                  {anime.status}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-semibold ">
                  {anime.genre}
                </span>
                <span className="text-gray-300">{anime.episodes} Episodes</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-8">
                {anime.description || `An epic ${anime.genre.toLowerCase()} anime that follows the adventures of compelling characters through an engaging storyline. This series has captivated audiences worldwide with its stunning animation, memorable soundtrack, and deep character development.`}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="flex items-center justify-center space-x-3 px-8 py-3 text-white rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
                  <Play className="w-5 h-5" fill="white" />
                  <span>Watch Episode 1</span>
                </button>
                <button className="flex items-center justify-center space-x-3 px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 border border-gray-600 transition-all duration-300">
                  <Plus className="w-5 h-5" />
                  <span>Add to Watchlist</span>
                </button>
              </div>
            </div>
          </div>

          {/* Episodes Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Episodes</h3>
            <div className="bg-gray-800 rounded-xl p-6 max-h-96 overflow-y-auto">
              <div className="grid gap-4">
                {episodes.map((episode) => (
                  <div key={episode.number} className="flex items-center space-x-4 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors duration-300 cursor-pointer group">
                    <div className="relative w-20 h-12 flex-shrink-0">
                      <img 
                        src={episode.thumbnail} 
                        alt={episode.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                        <Play className="w-4 h-4 text-white" fill="white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold truncate">{episode.title}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 text-white rounded-full text-sm font-medium transition-colors duration-300">
                      Watch
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Anime */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Related Anime</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {relatedAnimes.map((related) => (
                <div key={related.id} className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
                    <img 
                      src={related.image} 
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-white font-semibold text-center transition-colors duration-300">
                    {related.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeModal;