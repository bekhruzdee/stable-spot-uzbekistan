
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPin, Users, Clock, Award, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for competitions
const competitions = [
  {
    id: 1,
    title: 'Tashkent Spring Championship',
    date: 'May 10-15, 2025',
    registrationDeadline: 'April 25, 2025',
    location: 'Tashkent Equestrian Center',
    address: '123 Stable Street, Tashkent, Uzbekistan',
    categories: ['Dressage', 'Show Jumping', 'Eventing'],
    stallsAvailable: 24,
    stallsTotal: 40,
    description: 'The Tashkent Spring Championship is one of the premier equestrian events in Uzbekistan, featuring competitions in dressage, show jumping, and eventing. Riders from across Central Asia participate in this prestigious event.',
    schedule: [
      { day: 'Day 1', events: ['Registration', 'Horse Inspection', 'Practice Arena Open'] },
      { day: 'Day 2', events: ['Dressage Preliminary Round', 'Show Jumping Warm-up'] },
      { day: 'Day 3', events: ['Dressage Finals', 'Show Jumping Preliminary Round'] },
      { day: 'Day 4', events: ['Show Jumping Finals', 'Eventing Dressage'] },
      { day: 'Day 5', events: ['Eventing Cross-Country', 'Awards Ceremony (Dressage & Show Jumping)'] },
      { day: 'Day 6', events: ['Eventing Show Jumping', 'Final Awards Ceremony'] },
    ],
    facilities: ['Indoor Arena', 'Outdoor Arena', 'Cross-Country Course', 'Warm-up Areas', 'Veterinary Services', 'Cafeteria'],
    image: 'https://images.unsplash.com/photo-1508343919546-4a5d6c83ba5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    title: 'Samarkand Classic Cup',
    date: 'June 20-25, 2025',
    registrationDeadline: 'June 5, 2025',
    location: 'Samarkand Horse Complex',
    address: '456 Registan Road, Samarkand, Uzbekistan',
    categories: ['Show Jumping', 'Endurance'],
    stallsAvailable: 16,
    stallsTotal: 30,
    description: 'The Samarkand Classic Cup features high-level show jumping competitions and endurance races set against the historic backdrop of Samarkand. This event attracts riders seeking to test their skills in these demanding disciplines.',
    schedule: [
      { day: 'Day 1', events: ['Registration', 'Horse Inspection', 'Course Walking'] },
      { day: 'Day 2', events: ['Show Jumping Preliminary Round', 'Endurance Vet Check'] },
      { day: 'Day 3', events: ['Show Jumping Semi-Finals', 'Endurance 40km Race'] },
      { day: 'Day 4', events: ['Show Jumping Finals', 'Endurance 80km Race'] },
      { day: 'Day 5', events: ['Endurance 120km Race', 'Closing Ceremony'] },
      { day: 'Day 6', events: ['Awards Presentation', 'Farewell Reception'] },
    ],
    facilities: ['Outdoor Arena', 'Endurance Trails', 'Warm-up Areas', 'Veterinary Services', 'Cafeteria', 'Lodging'],
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: 3,
    title: 'Bukhara International Horse Show',
    date: 'July 5-10, 2025',
    registrationDeadline: 'June 20, 2025',
    location: 'Bukhara Equestrian Park',
    address: '789 Heritage Avenue, Bukhara, Uzbekistan',
    categories: ['Dressage', 'Show Jumping', 'Vaulting'],
    stallsAvailable: 32,
    stallsTotal: 50,
    description: 'The Bukhara International Horse Show is a celebration of equestrian excellence, featuring competitions in dressage, show jumping, and vaulting. This event showcases the rich equestrian heritage of Uzbekistan and welcomes international participants.',
    schedule: [
      { day: 'Day 1', events: ['Registration', 'Horse Inspection', 'Practice Sessions'] },
      { day: 'Day 2', events: ['Dressage Preliminary Round', 'Vaulting Compulsories'] },
      { day: 'Day 3', events: ['Dressage Intermediate', 'Vaulting Freestyle', 'Show Jumping Warm-up'] },
      { day: 'Day 4', events: ['Dressage Finals', 'Show Jumping Preliminary Round'] },
      { day: 'Day 5', events: ['Show Jumping Semi-Finals', 'Vaulting Finals'] },
      { day: 'Day 6', events: ['Show Jumping Finals', 'Closing Ceremony', 'Awards Presentation'] },
    ],
    facilities: ['Indoor Arena', 'Outdoor Arena', 'Warm-up Areas', 'Veterinary Services', 'Restaurant', 'VIP Lounge'],
    image: 'https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80'
  },
];

const CompetitionsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Upcoming Competitions</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Explore and register for equestrian competitions across Uzbekistan.
          </p>

          <div className="mt-8 space-y-10">
            {competitions.map((competition) => (
              <Card key={competition.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img 
                      src={competition.image} 
                      alt={competition.title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <CardTitle className="text-2xl">{competition.title}</CardTitle>
                          <CardDescription className="mt-2">
                            <div className="flex items-center mt-2">
                              <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{competition.date}</span>
                            </div>
                            <div className="flex items-center mt-2">
                              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{competition.location}</span>
                            </div>
                          </CardDescription>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button asChild>
                            <Link to={`/booking?competition=${competition.id}`}>Book a Stall</Link>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <Tabs defaultValue="overview">
                        <TabsList className="mb-4">
                          <TabsTrigger value="overview">Overview</TabsTrigger>
                          <TabsTrigger value="schedule">Schedule</TabsTrigger>
                          <TabsTrigger value="facilities">Facilities</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="overview" className="space-y-4">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {competition.categories.map((category) => (
                              <Badge key={category} variant="outline">{category}</Badge>
                            ))}
                          </div>
                          
                          <p className="text-sm text-foreground">{competition.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="flex items-center text-sm">
                              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{competition.stallsAvailable} out of {competition.stallsTotal} stalls available</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Registration deadline: {competition.registrationDeadline}</span>
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="schedule">
                          <div className="space-y-4">
                            {competition.schedule.map((day, index) => (
                              <div key={index} className="border-b border-border pb-2 last:border-0">
                                <h4 className="font-semibold">{day.day}</h4>
                                <ul className="mt-2 space-y-1">
                                  {day.events.map((event, idx) => (
                                    <li key={idx} className="text-sm flex">
                                      <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                                      {event}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="facilities">
                          <div className="space-y-2">
                            <h4 className="font-semibold">Available Facilities</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {competition.facilities.map((facility, index) => (
                                <div key={index} className="flex items-center">
                                  <Info className="h-4 w-4 mr-2 text-primary" />
                                  <span className="text-sm">{facility}</span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-border">
                              <h4 className="font-semibold">Location Details</h4>
                              <p className="text-sm mt-2">{competition.address}</p>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                    
                    <CardFooter className="border-t border-border pt-4">
                      <Button asChild variant="outline" className="w-full md:w-auto">
                        <Link to={`/booking?competition=${competition.id}`}>
                          View Available Stalls
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompetitionsPage;
