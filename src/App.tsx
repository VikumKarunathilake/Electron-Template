import { useState } from 'react';
import { toast, Toaster } from 'sonner'; // ✅ Sonner import
import Navigation from './components/Navigation';
import HeroBanner from './components/HeroBanner';
import FilterBar from './components/FilterBar';
import AnimeGrid from './components/AnimeGrid';
import AnimeModal from './components/AnimeModal';
import { featuredAnime, trendingAnimes, newReleases, Anime } from './data/animeData';

function App() {
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedType, setSelectedType] = useState<'all' | 'sub' | 'dub'>('all');
  const [showLatest, setShowLatest] = useState(false);

  // Open modal when anime is clicked
  const handleAnimeClick = (anime: Anime) => {
    setSelectedAnime(anime);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnime(null);
  };

  // Search handler using Sonner toast
  const handleSearch = (query: string) => {
    if (query.trim()) {
      toast('Search initiated', {
        description: `Searching for: ${query}`,
      });
    }
  };

  // Filter handlers
  const handleGenreChange = (genre: string) => setSelectedGenre(genre);
  const handleTypeChange = (type: 'all' | 'sub' | 'dub') => setSelectedType(type);
  const handleLatestToggle = () => setShowLatest(!showLatest);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation with search */}
      <Navigation onSearch={handleSearch} />

      {/* Featured Hero Banner */}
      <HeroBanner featuredAnime={featuredAnime} />

      {/* Filter bar */}
      <FilterBar
        selectedGenre={selectedGenre}
        onGenreChange={handleGenreChange}
        selectedType={selectedType}
        onTypeChange={handleTypeChange}
        showLatest={showLatest}
        onLatestToggle={handleLatestToggle}
      />

      {/* Anime grids */}
      <main>
        <AnimeGrid
          title="Trending Now"
          animes={trendingAnimes}
          onAnimeClick={handleAnimeClick}
        />

        <AnimeGrid
          title="New Releases"
          animes={newReleases}
          onAnimeClick={handleAnimeClick}
        />
      </main>

      {/* Modal for selected anime */}
      <AnimeModal
        anime={selectedAnime}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Sonner toaster */}
      <Toaster />
    </div>
  );
}

export default App;