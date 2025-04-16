
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Compass, Lock, ShieldCheck, Users2 } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">About StableSpot</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Simplifying horse stall bookings for competitions across Uzbekistan.
            </p>
          </div>
          
          <div className="bg-muted rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  StableSpot aims to simplify the process of booking horse stalls for competitions in Uzbekistan,
                  making it easier for riders, coaches, and horse owners to focus on what matters most - their performance.
                </p>
                <p className="text-muted-foreground mb-4">
                  We understand the challenges faced by the equestrian community in securing appropriate
                  accommodations for their horses during competitions. Our platform eliminates these
                  challenges by providing a streamlined booking process with transparent availability.
                </p>
                <p className="text-muted-foreground">
                  By creating an efficient system for stall management, we help competition organizers,
                  stable managers, and participants save time and reduce stress.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img 
                  src="https://images.unsplash.com/photo-1569513563689-9442d67da0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Horses in stable"
                  className="rounded-lg max-h-80 object-cover shadow-lg" 
                />
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Easy Booking</h3>
                  <p className="text-muted-foreground text-sm">
                    Book stalls for your horses with just a few clicks, eliminating the need for phone calls and paperwork.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Secure Access</h3>
                  <p className="text-muted-foreground text-sm">
                    Custom access control ensures only authorized personnel can access your horse's stall.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Compass className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Location Details</h3>
                  <p className="text-muted-foreground text-sm">
                    Get detailed information about competition venues, including maps, facilities, and directions.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Users2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Team Management</h3>
                  <p className="text-muted-foreground text-sm">
                    Easily manage access for your team members including riders, coaches, and support staff.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Why Choose StableSpot</h2>
            <div className="space-y-4">
              <div className="flex">
                <ShieldCheck className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Trusted by the Equestrian Community</h3>
                  <p className="text-muted-foreground mt-1">
                    StableSpot is built in collaboration with riders, coaches, and stable managers to address their specific needs.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <ShieldCheck className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Simple and Intuitive</h3>
                  <p className="text-muted-foreground mt-1">
                    Our platform is designed to be user-friendly, ensuring that anyone can book a stall without hassle.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <ShieldCheck className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Secure and Reliable</h3>
                  <p className="text-muted-foreground mt-1">
                    We prioritize the security of your information and the reliability of our booking system.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <ShieldCheck className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Dedicated Support</h3>
                  <p className="text-muted-foreground mt-1">
                    Our team is committed to providing exceptional support to ensure your experience is smooth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Join the StableSpot Community</h2>
            <p className="text-muted-foreground mb-6">
              Whether you're a rider, coach, horse owner, or competition organizer, StableSpot is designed to make
              your equestrian experience better. Join our growing community and discover the benefits of our platform.
            </p>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1546140931-0ecd13022a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Equestrian community"
                className="rounded-lg max-h-96 object-cover shadow-lg" 
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
