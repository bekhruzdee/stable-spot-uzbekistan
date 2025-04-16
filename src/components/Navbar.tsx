
import React from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary">
                Home
              </Link>
              <Link to="/booking" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary">
                Book a Stall
              </Link>
              <Link to="/competitions" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary">
                Competitions
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary">
                About
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Button variant="ghost" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild className="ml-4">
              <Link to="/register">Register</Link>
            </Button>
          </div>
          <div className="flex items-center md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/booking" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Stall
            </Link>
            <Link 
              to="/competitions" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Competitions
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="flex items-center px-5">
              <Button 
                variant="ghost" 
                className="w-full justify-center" 
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/login">Log in</Link>
              </Button>
            </div>
            <div className="mt-3 px-5 pb-3">
              <Button 
                className="w-full justify-center" 
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
