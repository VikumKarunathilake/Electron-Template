import React from 'react';

interface FilterBarProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  selectedType: 'all' | 'sub' | 'dub';
  onTypeChange: (type: 'all' | 'sub' | 'dub') => void;
  showLatest: boolean;
  onLatestToggle: () => void;
}

const genres = [
  'All', 'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 
  'Romance', 'Sci-Fi', 'Thriller', 'Horror', 'Sports', 'Music'
];

const FilterBar: React.FC<FilterBarProps> = ({
  selectedGenre,
  onGenreChange,
  selectedType,
  onTypeChange,
  showLatest,
  onLatestToggle
}) => {
  return (
    <div className="bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Genre Filters */}
        <div className="mb-6">
          <h3 className="text-white font-semibold mb-3">Genres</h3>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => onGenreChange(genre)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedGenre === genre
                    ? 'text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Type and Latest Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Sub/Dub Toggle */}
          <div className="flex items-center space-x-1 bg-gray-800 rounded-full p-1">
            {(['all', 'sub', 'dub'] as const).map((type) => (
              <button
                key={type}
                onClick={() => onTypeChange(type)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedType === type
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {type === 'all' ? 'All' : type === 'sub' ? 'Subtitled' : 'Dubbed'}
              </button>
            ))}
          </div>

          {/* Latest Episodes Toggle */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-300 text-sm">Latest Episodes</span>
            <button
              onClick={onLatestToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                showLatest ? '' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showLatest ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;