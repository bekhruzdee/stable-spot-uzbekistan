
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/90 backdrop-blur-sm border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-muted-foreground">
              StableSpot is the premier horse stall booking system for competitions in Uzbekistan.
              Our platform enables riders, coaches, and stable managers to efficiently book
              and manage stalls for equestrian competitions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/booking" className="text-foreground hover:text-primary">Book a Stall</Link>
              </li>
              <li>
                <Link to="/competitions" className="text-foreground hover:text-primary">Competitions</Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground hover:text-primary">About Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-muted-foreground">
              <p>Tashkent Equestrian Center</p>
              <p>123 Stable Street</p>
              <p>Tashkent, Uzbekistan</p>
              <p className="mt-2">Email: info@stablespot.uz</p>
              <p>Phone: +998 xx xxx xx xx</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} StableSpot. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
