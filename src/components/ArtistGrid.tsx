
import React from 'react';
import ArtistCard from './ArtistCard';
import { Artist, Category } from '@/data/mockData';

interface ArtistGridProps {
  artists: Artist[];
  selectedGenres: string[];
  selectedCity: string | null;
  selectedCategories: Category[];
}

const ArtistGrid: React.FC<ArtistGridProps> = ({
  artists,
  selectedGenres,
  selectedCity,
  selectedCategories
}) => {
  // Filter artists based on selected filters
  const filteredArtists = artists.filter(artist => {
    // Filter by genre
    const genreMatch = selectedGenres.length === 0 || selectedGenres.includes(artist.primaryGenre);
    
    // Filter by city
    const cityMatch = !selectedCity || artist.city === selectedCity;
    
    // Filter by category
    const categoryMatch = selectedCategories.length === 0 || 
      artist.categories.some(category => selectedCategories.includes(category));
    
    return genreMatch && cityMatch && categoryMatch;
  });
  
  return (
    <div className="container mx-auto px-4 pb-16">
      {filteredArtists.length > 0 ? (
        <>
          <p className="text-sm text-music-muted mb-6">
            Showing {filteredArtists.length} artists
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium mb-2">No artists found</h3>
          <p className="text-music-muted">
            Try adjusting your filters to see more results.
          </p>
        </div>
      )}
    </div>
  );
};

export default ArtistGrid;
