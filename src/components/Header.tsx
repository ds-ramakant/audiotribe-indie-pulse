
import React from 'react';
import { getCurrentMonth } from '@/data/mockData';
import { PlusCircle, Music } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Music size={32} className="text-music-purple" />
            <h1 className="text-2xl md:text-3xl font-bold text-music-purple">
              AudioTribe
            </h1>
          </div>
          <div>
            <button className="flex items-center gap-1 bg-music-purple text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-music-darkPurple transition-colors">
              <PlusCircle size={16} />
              <span>Join as Artist</span>
            </button>
          </div>
        </div>
        
        <div className="mt-16 mb-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-music-text">
            <span className="text-music-purple">Audiotribe</span> Indie Spotlight 🎶
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-music-text/80">
            {getCurrentMonth()} Edition
          </h2>
          <p className="mt-4 text-lg text-music-muted max-w-2xl mx-auto">
            Discover top indie talent, handpicked by fans and experts.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-music-purple/10 to-music-purple/5 p-4 rounded-lg text-center mb-8 animate-pulse-gentle">
          <p className="text-sm font-medium">
            ✨ {getCurrentMonth()} Update: Discover 10 brand-new Gig Veterans added this month!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
