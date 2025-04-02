
import React from 'react';
import ArtistCard from './ArtistCard';
import { Artist } from '@/data/mockData';

interface GenreSectionProps {
  genreName: string;
  artists: Artist[];
}

const GenreSection: React.FC<GenreSectionProps> = ({ genreName, artists }) => {
  if (artists.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold">{genreName}</h2>
        <div className="h-[1px] bg-gray-200 flex-grow ml-4"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map(artist => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default GenreSection;
