
import React from 'react';
import { getCurrentMonth } from '@/data/mockData';
import { Music, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <Music size={24} className="text-music-purple" />
              <h2 className="text-xl font-bold text-music-purple">AudioTribe</h2>
            </div>
            <p className="text-music-muted text-sm mb-4">
              AudioTribe's Indie Spotlight celebrates the best independent artists every month, 
              connecting fans with amazing talent across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-music-muted hover:text-music-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-music-muted hover:text-music-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-music-muted hover:text-music-purple transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-3">For Artists</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-music-muted hover:text-music-purple">Sign Up</a></li>
                <li><a href="#" className="text-sm text-music-muted hover:text-music-purple">Resources</a></li>
                <li><a href="#" className="text-sm text-music-muted hover:text-music-purple">Guidelines</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">For Fans</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-music-muted hover:text-music-purple">Create Account</a></li>
                <li><a href="#" className="text-sm text-music-muted hover:text-music-purple">Ticket Info</a></li>
                <li><a href="#" className="text-sm text-music-muted hover:text-music-purple">Review System</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-music-muted hover:text-music-purple">About</a></li>
                <li><a href="#" className="text-sm text-music-muted hover:text-music-purple">Contact</a></li>
                <li><a href="#" className="text-sm text-music-muted hover:text-music-purple">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-music-muted">
            © {new Date().getFullYear()} AudioTribe. {getCurrentMonth()} Edition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
