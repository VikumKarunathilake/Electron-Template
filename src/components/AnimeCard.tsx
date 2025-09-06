import React from 'react';
import { Play, Star } from 'lucide-react';

interface AnimeCardProps {
    anime: {
        id: string;
        title: string;
        image: string;
        rating: number;
        episodes: number;
        status: string;
        genre: string;
    };
    onClick: () => void;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime, onClick }) => {
    return (
        <div
            className="group relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-gray-800 border border-gray-800"
            onClick={onClick}
        >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden">
                <img
                    src={anime.image}
                    alt={anime.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                        <Play className="w-12 h-12 text-white mb-2 mx-auto" fill="white" />
                        <p className="text-white font-semibold">Watch Now</p>
                    </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${anime.status === 'Ongoing' || anime.status === 'Currently Airing'
                            ? 'bg-green-500 text-white'
                            : anime.status === 'Completed'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-500 text-white'
                        }`}>
                        {anime.status}
                    </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                    <span className="text-white text-xs font-semibold">{anime.rating}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 transition-colors duration-300">
                    {anime.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{anime.episodes} Episodes</span>
                    <span>{anime.genre}</span>
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 transition-all duration-300" />
        </div>
    );
};

export default AnimeCard;