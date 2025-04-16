
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-brown-100 to-transparent pb-16 pt-14 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Book Horse Stalls for Competitions in Uzbekistan
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            StableSpot makes it easy for riders, coaches, and horse owners to book stalls
            for equestrian competitions in Uzbekistan. Save time, reduce stress, and focus on what matters most - your performance.
          </p>
          <div className="mt-8 flex items-center gap-x-6">
            <Button asChild size="lg">
              <Link to="/booking" className="flex items-center">
                Book a Stall <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/competitions">View Competitions</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brown-200 to-amber-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
