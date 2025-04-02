
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Download } from 'lucide-react';
import { mockGigs } from '@/data/mockData';

interface GigCalendarProps {
  selectedGenre: string;
  selectedCity: string | null;
}

const GigCalendar: React.FC<GigCalendarProps> = ({ selectedGenre, selectedCity }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Filter gigs based on genre and city
  const filteredGigs = mockGigs.filter(gig => {
    const genreMatch = gig.genre === selectedGenre;
    const cityMatch = !selectedCity || gig.city === selectedCity;
    return genreMatch && cityMatch;
  });
  
  // Get gigs for the selected date
  const getGigsForDate = (date: Date | undefined) => {
    if (!date) return [];
    
    return filteredGigs.filter(gig => {
      const gigDate = new Date(gig.date);
      return gigDate.getDate() === date.getDate() && 
             gigDate.getMonth() === date.getMonth() && 
             gigDate.getFullYear() === date.getFullYear();
    });
  };
  
  const selectedDateGigs = getGigsForDate(date);
  
  // Generate google calendar link
  const generateCalendarLink = () => {
    if (!selectedCity) return '#';
    
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);
    
    const title = encodeURIComponent(`${selectedGenre} gigs in ${selectedCity}`);
    const dates = `${startDate.toISOString().replace(/-|:|\.\d+/g, '')}/` +
                 `${endDate.toISOString().replace(/-|:|\.\d+/g, '')}`;
    const details = encodeURIComponent(`${selectedGenre} music events in ${selectedCity}`);
    const location = encodeURIComponent(selectedCity);
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Upcoming Gigs</h2>
          <p className="text-music-muted">
            Discover live shows in your area based on your preferences
          </p>
        </div>
        
        <a 
          href={generateCalendarLink()} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center ${(!selectedCity || filteredGigs.length === 0) ? 'opacity-50 pointer-events-none' : ''}`}
        >
          <Button className="flex items-center gap-2">
            <Download size={16} />
            <span>Add to Google Calendar</span>
          </Button>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-1 h-fit">
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
            <CardDescription>
              Pick a date to see available gigs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border pointer-events-auto"
              disabled={(date) => {
                // Disable dates with no gigs
                const hasGigs = filteredGigs.some(gig => {
                  const gigDate = new Date(gig.date);
                  return gigDate.getDate() === date.getDate() && 
                         gigDate.getMonth() === date.getMonth() && 
                         gigDate.getFullYear() === date.getFullYear();
                });
                return !hasGigs;
              }}
            />
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon size={20} />
              <span>
                {date ? date.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }) : 'No date selected'}
              </span>
            </CardTitle>
            <CardDescription>
              {selectedDateGigs.length} gigs found for this date
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDateGigs.length > 0 ? (
              <div className="space-y-4">
                {selectedDateGigs.map(gig => (
                  <div key={gig.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{gig.artistName}</h3>
                        <p className="text-sm text-music-muted">{gig.venueName}, {gig.city}</p>
                        <p className="text-sm mt-1">
                          {new Date(gig.date).toLocaleTimeString('en-US', { 
                            hour: '2-digit', 
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100">
                        {gig.genre}
                      </span>
                    </div>
                    <div className="mt-3 pt-3 border-t flex justify-between items-center">
                      <span className="text-sm font-medium">₹{gig.ticketPrice}</span>
                      <Button size="sm">Buy Tickets</Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-music-muted">No gigs available for the selected date</p>
                <p className="text-sm mt-2">Try selecting another date or changing your filters</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GigCalendar;
