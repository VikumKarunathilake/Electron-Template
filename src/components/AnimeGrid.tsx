import React from 'react';
import AnimeCard from './AnimeCard';

interface Anime {
  id: string;
  title: string;
  image: string;
  rating: number;
  episodes: number;
  status: string;
  genre: string;
  description?: string;
}

interface AnimeGridProps {
  title: string;
  animes: Anime[];
  onAnimeClick: (anime: Anime) => void;
}

const AnimeGrid: React.FC<AnimeGridProps> = ({ title, animes, onAnimeClick }) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <button className="font-semibold transition-colors duration-300">
            View All →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {animes.map((anime) => (
            <AnimeCard
              key={anime.id}
              anime={anime}
              onClick={() => onAnimeClick(anime)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimeGrid;