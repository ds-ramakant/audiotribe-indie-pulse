
export interface Artist {
  id: string;
  name: string;
  image: string;
  primaryGenre: string;
  categories: Category[];
  city: string;
  followersCount: number;
  attendeesCount: number;
}

export type Category = 
  | 'emerging' 
  | 'veteran' 
  | 'favorite' 
  | 'venue' 
  | 'critic' 
  | 'scene';

export const categoryInfo = {
  emerging: {
    label: 'Emerging Talent',
    icon: '🪴',
    description: 'New artists with active fan buzz, few but growing gigs',
    color: 'category-emerging'
  },
  veteran: {
    label: 'Gig Veteran',
    icon: '🎸',
    description: 'Artists consistently performing with steady positive fan reviews',
    color: 'category-veteran'
  },
  favorite: {
    label: 'Fan Favorite',
    icon: '🔥',
    description: 'Highly reviewed by fans, consistent positive feedback',
    color: 'category-favorite'
  },
  venue: {
    label: 'Venue Regular',
    icon: '🎯',
    description: 'Frequently booked by multiple venues',
    color: 'category-venue'
  },
  critic: {
    label: 'Critic\'s Choice',
    icon: '🌟',
    description: 'Positive recognition by independent critics or journalists',
    color: 'category-critic'
  },
  scene: {
    label: 'Scene Shaper',
    icon: '✨',
    description: 'High peer recommendations, actively shaping local scenes',
    color: 'category-scene'
  }
};

export const genreOptions = [
  'Rock', 'Electronic', 'Hip-Hop', 'Pop', 'Acoustic', 
  'Classical', 'Folk', 'Jazz', 'Fusion'
];

export const cityOptions = [
  'Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 'Chennai', 
  'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Goa'
];

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Maya Soundscape',
    image: '/images/artist1.jpg',
    primaryGenre: 'Electronic',
    categories: ['emerging', 'critic'],
    city: 'Mumbai',
    followersCount: 124,
    attendeesCount: 45
  },
  {
    id: '2',
    name: 'Ravi & The Beats',
    image: '/images/artist2.jpg',
    primaryGenre: 'Jazz',
    categories: ['veteran', 'venue'],
    city: 'Delhi',
    followersCount: 312,
    attendeesCount: 180
  },
  {
    id: '3',
    name: 'Electric Dreams',
    image: '/images/artist3.jpg',
    primaryGenre: 'Electronic',
    categories: ['favorite', 'scene'],
    city: 'Bangalore',
    followersCount: 523,
    attendeesCount: 210
  },
  {
    id: '4',
    name: 'Priya Melodies',
    image: '/images/artist4.jpg',
    primaryGenre: 'Pop',
    categories: ['emerging', 'venue'],
    city: 'Mumbai',
    followersCount: 98,
    attendeesCount: 32
  },
  {
    id: '5',
    name: 'Cosmic Wanderers',
    image: '/images/artist5.jpg',
    primaryGenre: 'Rock',
    categories: ['veteran', 'critic'],
    city: 'Pune',
    followersCount: 434,
    attendeesCount: 285
  },
  {
    id: '6',
    name: 'Acoustic Journeys',
    image: '/images/artist6.jpg',
    primaryGenre: 'Acoustic',
    categories: ['favorite', 'veteran'],
    city: 'Chennai',
    followersCount: 321,
    attendeesCount: 156
  },
  {
    id: '7',
    name: 'Rhythmic Flow',
    image: '/images/artist7.jpg',
    primaryGenre: 'Hip-Hop',
    categories: ['scene', 'favorite'],
    city: 'Delhi',
    followersCount: 637,
    attendeesCount: 342
  },
  {
    id: '8',
    name: 'Fusion Collective',
    image: '/images/artist8.jpg',
    primaryGenre: 'Fusion',
    categories: ['critic', 'venue'],
    city: 'Bangalore',
    followersCount: 289,
    attendeesCount: 134
  },
  {
    id: '9',
    name: 'Mystic Strings',
    image: '/images/artist9.jpg',
    primaryGenre: 'Classical',
    categories: ['veteran', 'critic'],
    city: 'Kolkata',
    followersCount: 176,
    attendeesCount: 89
  },
  {
    id: '10',
    name: 'Urban Beats',
    image: '/images/artist10.jpg',
    primaryGenre: 'Hip-Hop',
    categories: ['emerging', 'scene'],
    city: 'Mumbai',
    followersCount: 421,
    attendeesCount: 203
  },
  {
    id: '11',
    name: 'Folk Tales',
    image: '/images/artist11.jpg',
    primaryGenre: 'Folk',
    categories: ['veteran', 'favorite'],
    city: 'Jaipur',
    followersCount: 245,
    attendeesCount: 132
  },
  {
    id: '12',
    name: 'Synth Wave Crew',
    image: '/images/artist12.jpg',
    primaryGenre: 'Electronic',
    categories: ['emerging', 'critic'],
    city: 'Goa',
    followersCount: 378,
    attendeesCount: 167
  }
];

// Helper function to get current month name
export const getCurrentMonth = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[new Date().getMonth()];
};
