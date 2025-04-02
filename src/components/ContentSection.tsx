
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContentSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 mb-10">
      <h2 className="text-2xl font-bold mb-8">Discover More</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Upcoming Gigs Card */}
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-40 bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
            <span className="text-4xl">🎟️</span>
          </div>
          <CardHeader>
            <CardTitle>Gigs We're Excited About</CardTitle>
            <CardDescription>Our team's top picks for this month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              From stadium shows to intimate venues, these are the performances you shouldn't miss this month.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Read More</Button>
          </CardFooter>
        </Card>
        
        {/* Exciting Artists Card */}
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-40 bg-gradient-to-r from-amber-500 to-red-500 flex items-center justify-center">
            <span className="text-4xl">🎸</span>
          </div>
          <CardHeader>
            <CardTitle>Artists Touring India</CardTitle>
            <CardDescription>Exclusive features and interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Get to know the top indie artists currently on tour across India with our exclusive interviews and behind-the-scenes content.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Read More</Button>
          </CardFooter>
        </Card>
        
        {/* Best Venues Card */}
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-40 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
            <span className="text-4xl">🏟️</span>
          </div>
          <CardHeader>
            <CardTitle>Hidden Gem Venues</CardTitle>
            <CardDescription>Lesser-known but amazing spaces</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Discover incredible venues off the beaten path that provide unforgettable live music experiences.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Read More</Button>
          </CardFooter>
        </Card>
        
        {/* Community Card */}
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-40 bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
            <span className="text-4xl">💬</span>
          </div>
          <CardHeader>
            <CardTitle>Join Our Community</CardTitle>
            <CardDescription>Connect with fellow music lovers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Be part of our exclusive WhatsApp and Discord communities for early access to tickets, special promotions, and meet-ups.
            </p>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">WhatsApp</Button>
            <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">Discord</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ContentSection;
