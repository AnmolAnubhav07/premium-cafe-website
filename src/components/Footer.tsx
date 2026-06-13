import React from 'react';
import { Coffee, Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-brown text-neutral-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Coffee className="h-8 w-8 text-accent-gold" />
              <span className="text-2xl font-playfair font-bold">Brew & Bloom</span>
            </div>
            <p className="text-neutral-beige/80 mb-6">
              Experience handcrafted coffee, fresh ingredients, and a warm atmosphere every day.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6 text-accent-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-neutral-beige/80 hover:text-accent-gold transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-neutral-beige/80 hover:text-accent-gold transition-colors">Menu</Link></li>
              <li><Link to="/about" className="text-neutral-beige/80 hover:text-accent-gold transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-neutral-beige/80 hover:text-accent-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-neutral-beige/80 hover:text-accent-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6 text-accent-gold">Opening Hours</h3>
            <ul className="space-y-3 text-neutral-beige/80">
              <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mon - Fri: 7AM - 9PM</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Saturday: 8AM - 10PM</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Sunday: 8AM - 8PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6 text-accent-gold">Contact Us</h3>
            <ul className="space-y-3 text-neutral-beige/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@brewandbloom.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>123 Coffee Street<br />Kolkata, India 700001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-neutral-beige/60">
          <p>&copy; 2024 Brew & Bloom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
