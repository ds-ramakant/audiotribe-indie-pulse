
import React, { useState } from 'react';
import { genreOptions, cityOptions, categoryInfo, Category } from '@/data/mockData';
import { Search } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterSystemProps {
  selectedGenres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCity: string | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<string | null>>;
  selectedCategories: Category[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const FilterSystem: React.FC<FilterSystemProps> = ({
  selectedGenres,
  setSelectedGenres,
  selectedCity,
  setSelectedCity,
  selectedCategories,
  setSelectedCategories
}) => {
  const [citySearchTerm, setCitySearchTerm] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  // Handle genre selection from dropdown
  const handleGenreChange = (genre: string) => {
    setSelectedGenres([genre]);
  };

  // Toggle category selection
  const toggleCategory = (category: Category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Filter cities based on search term
  const filteredCities = cityOptions.filter(city => 
    city.toLowerCase().includes(citySearchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 mb-10">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold mb-4">Filter Artists</h3>
        
        {/* Genre Dropdown */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-music-muted mb-3">Genre</h4>
          <Select 
            defaultValue="Rock" 
            onValueChange={handleGenreChange}
            value={selectedGenres.length > 0 ? selectedGenres[0] : undefined}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a genre" />
            </SelectTrigger>
            <SelectContent>
              {genreOptions.map(genre => (
                <SelectItem key={genre} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* City Selection */}
        <div className="mb-6 relative">
          <h4 className="text-sm font-medium text-music-muted mb-3">City</h4>
          <div className="relative">
            <input
              type="text"
              value={citySearchTerm}
              onChange={(e) => {
                setCitySearchTerm(e.target.value);
                setShowCityDropdown(true);
              }}
              onFocus={() => setShowCityDropdown(true)}
              placeholder={selectedCity || "Search for a city..."}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-music-purple/30"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            
            {showCityDropdown && (
              <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                {filteredCities.length > 0 ? (
                  filteredCities.map(city => (
                    <div
                      key={city}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCity(city);
                        setCitySearchTerm('');
                        setShowCityDropdown(false);
                      }}
                    >
                      {city}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">No cities found</div>
                )}
              </div>
            )}
          </div>
          {selectedCity && (
            <div className="mt-2">
              <button 
                className="text-sm text-music-purple hover:underline"
                onClick={() => setSelectedCity(null)}
              >
                Clear selection
              </button>
            </div>
          )}
        </div>
        
        {/* Artist Categories */}
        <div>
          <h4 className="text-sm font-medium text-music-muted mb-3">Artist Classification</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {(Object.keys(categoryInfo) as Category[]).map(category => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`filter-pill flex items-center justify-center gap-1.5 ${
                  selectedCategories.includes(category) 
                    ? 'filter-pill-active' 
                    : 'filter-pill-inactive'
                }`}
              >
                <span>{categoryInfo[category].icon}</span>
                <span>{categoryInfo[category].label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSystem;
