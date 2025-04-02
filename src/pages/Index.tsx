
import React, { useState } from 'react';
import Header from '@/components/Header';
import FilterSystem from '@/components/FilterSystem';
import ArtistGrid from '@/components/ArtistGrid';
import Footer from '@/components/Footer';
import { mockArtists, Category, getCurrentMonth } from '@/data/mockData';

const Index = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">
              Audiotribe Indie Spotlight 🎶 — {getCurrentMonth()} Edition
            </h1>
            <p className="text-music-muted">
              Discover top indie talent, handpicked by fans and experts.
            </p>
          </div>
        </div>
        
        <FilterSystem 
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        
        <ArtistGrid 
          artists={mockArtists}
          selectedGenres={selectedGenres}
          selectedCity={selectedCity}
          selectedCategories={selectedCategories}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
