
import React from 'react';
import { Artist, categoryInfo } from '@/data/mockData';
import { Ticket, Star, UserPlus } from 'lucide-react';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const primaryCategory = artist.categories[0];
  
  return (
    <div className="artist-card">
      <div className="relative overflow-hidden">
        <img 
          src={artist.image} 
          alt={artist.name} 
          className="artist-card-image"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 z-10">
          <span 
            className={`category-badge bg-${categoryInfo[primaryCategory].color}/90 text-white`}
          >
            {categoryInfo[primaryCategory].icon} {categoryInfo[primaryCategory].label}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg">{artist.name}</h3>
            <p className="text-music-muted text-sm">{artist.primaryGenre} • {artist.city}</p>
          </div>
        </div>
        
        {artist.categories.length > 1 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {artist.categories.slice(1).map(category => (
              <span 
                key={category}
                className={`category-badge bg-${categoryInfo[category].color}/10 text-${categoryInfo[category].color}`}
              >
                {categoryInfo[category].icon} {categoryInfo[category].label}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-4 text-xs text-music-muted mb-4">
          <div className="flex items-center gap-1 mb-1">
            <span>👍</span>
            <span>{artist.followersCount} people follow this artist</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🔥</span>
            <span>{artist.attendeesCount} people attended recent gigs</span>
          </div>
        </div>
        
        <div className="flex gap-2 mt-2">
          <button className="flex-1 flex items-center justify-center gap-1 bg-music-purple text-white py-2 rounded-md hover:bg-music-darkPurple transition-colors text-sm">
            <Ticket size={14} />
            <span>Buy Tickets</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-1 bg-white text-music-text border border-gray-200 py-2 rounded-md hover:border-music-purple/50 transition-colors text-sm">
            <Star size={14} />
            <span>Review</span>
          </button>
          <button className="flex items-center justify-center gap-1 w-10 bg-white text-music-text border border-gray-200 py-2 rounded-md hover:border-music-purple/50 transition-colors">
            <UserPlus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
