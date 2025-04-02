
import React, { useState } from 'react';
import Header from '@/components/Header';
import FilterSystem from '@/components/FilterSystem';
import ArtistGrid from '@/components/ArtistGrid';
import Footer from '@/components/Footer';
import { mockArtists, Category } from '@/data/mockData';

const Index = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
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
