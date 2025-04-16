
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CalendarIcon, MapPinIcon, Users } from 'lucide-react';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';

// Mock data for upcoming competitions
const competitions = [
  {
    id: 1,
    title: 'Tashkent Spring Championship',
    date: 'May 10-15, 2025',
    location: 'Tashkent Equestrian Center',
    categories: ['Dressage', 'Show Jumping', 'Eventing'],
    stallsAvailable: 24,
    image: 'https://olamsport.com/upload/storage/296856_original.jpg'
  },
  {
    id: 2,
    title: 'Samarkand Classic Cup',
    date: 'June 20-25, 2025',
    location: 'Samarkand Horse Complex',
    categories: ['Show Jumping', 'Endurance'],
    stallsAvailable: 16,
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: 3,
    title: 'Bukhara International Horse Show',
    date: 'July 5-10, 2025',
    location: 'Bukhara Equestrian Park',
    categories: ['Dressage', 'Show Jumping', 'Vaulting'],
    stallsAvailable: 32,
    image: 'https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80'
  },
];

const UpcomingCompetitions: React.FC = () => {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Upcoming Competitions</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Book stalls for these upcoming equestrian events across Uzbekistan.
          </p>
        </div>
        
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-border pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {competitions.map((competition) => (
            <Card key={competition.id} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={competition.image} 
                  alt={competition.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <CardHeader>
                <CardTitle>{competition.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center mt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{competition.date}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <MapPinIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{competition.location}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {competition.categories.map((category) => (
                    <Badge key={category} variant="outline">{category}</Badge>
                  ))}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{competition.stallsAvailable} stalls available</span>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={`/booking?competition=${competition.id}`}>Book a Stall</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingCompetitions;
