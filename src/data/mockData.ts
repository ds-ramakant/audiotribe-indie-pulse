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

export interface Gig {
  id: string;
  artistName: string;
  genre: string;
  date: string;
  time: string;
  venueName: string;
  city: string;
  ticketPrice: number;
}

export const mockGigs: Gig[] = [
  {
    id: 'g1',
    artistName: 'Maya Soundscape',
    genre: 'Electronic',
    date: '2024-09-15T19:30:00',
    time: '7:30 PM',
    venueName: 'Antisocial',
    city: 'Mumbai',
    ticketPrice: 500
  },
  {
    id: 'g2',
    artistName: 'Ravi & The Beats',
    genre: 'Jazz',
    date: '2024-09-16T20:00:00',
    time: '8:00 PM',
    venueName: 'Piano Man',
    city: 'Delhi',
    ticketPrice: 800
  },
  {
    id: 'g3',
    artistName: 'Electric Dreams',
    genre: 'Electronic',
    date: '2024-09-18T21:00:00',
    time: '9:00 PM',
    venueName: 'Fandom',
    city: 'Bangalore',
    ticketPrice: 600
  },
  {
    id: 'g4',
    artistName: 'Cosmic Wanderers',
    genre: 'Rock',
    date: '2024-09-20T19:00:00',
    time: '7:00 PM',
    venueName: 'Hard Rock Cafe',
    city: 'Mumbai',
    ticketPrice: 750
  },
  {
    id: 'g5',
    artistName: 'Fusion Collective',
    genre: 'Fusion',
    date: '2024-09-15T20:30:00',
    time: '8:30 PM',
    venueName: 'Blue Frog',
    city: 'Pune',
    ticketPrice: 550
  },
  {
    id: 'g6',
    artistName: 'Urban Beats',
    genre: 'Hip-Hop',
    date: '2024-09-22T21:30:00',
    time: '9:30 PM',
    venueName: 'Auro',
    city: 'Delhi',
    ticketPrice: 600
  },
  {
    id: 'g7',
    artistName: 'Folk Tales',
    genre: 'Folk',
    date: '2024-09-25T19:00:00',
    time: '7:00 PM',
    venueName: 'Prithvi Theatre',
    city: 'Mumbai',
    ticketPrice: 400
  },
  {
    id: 'g8',
    artistName: 'Synth Wave Crew',
    genre: 'Electronic',
    date: '2024-09-28T22:00:00',
    time: '10:00 PM',
    venueName: 'Kitty Su',
    city: 'Delhi',
    ticketPrice: 900
  },
  {
    id: 'g9',
    artistName: 'Acoustic Journeys',
    genre: 'Acoustic',
    date: '2024-09-20T18:30:00',
    time: '6:30 PM',
    venueName: 'The Quarter',
    city: 'Mumbai',
    ticketPrice: 450
  },
  {
    id: 'g10',
    artistName: 'Rhythmic Flow',
    genre: 'Hip-Hop',
    date: '2024-09-15T20:00:00',
    time: '8:00 PM',
    venueName: 'Levi\'s Lounge',
    city: 'Bangalore',
    ticketPrice: 500
  },
  {
    id: 'g11',
    artistName: 'Priya Melodies',
    genre: 'Pop',
    date: '2024-09-17T19:00:00',
    time: '7:00 PM',
    venueName: 'Summerhouse Cafe',
    city: 'Delhi',
    ticketPrice: 350
  },
  {
    id: 'g12',
    artistName: 'Mystic Strings',
    genre: 'Classical',
    date: '2024-09-24T18:00:00',
    time: '6:00 PM',
    venueName: 'NCPA',
    city: 'Mumbai',
    ticketPrice: 1200
  },
  {
    id: 'g13',
    artistName: 'Rock Revolution',
    genre: 'Rock',
    date: '2024-09-15T21:00:00',
    time: '9:00 PM',
    venueName: 'The Humming Tree',
    city: 'Bangalore',
    ticketPrice: 700
  },
  {
    id: 'g14',
    artistName: 'Blues Brothers',
    genre: 'Rock',
    date: '2024-09-16T20:30:00',
    time: '8:30 PM',
    venueName: 'Bonobo',
    city: 'Mumbai',
    ticketPrice: 600
  },
  {
    id: 'g15',
    artistName: 'The Guitar Project',
    genre: 'Rock',
    date: '2024-09-18T19:30:00',
    time: '7:30 PM',
    venueName: 'The Piano Man Jazz Club',
    city: 'Delhi',
    ticketPrice: 550
  }
];

export const getCurrentMonth = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[new Date().getMonth()];
};
