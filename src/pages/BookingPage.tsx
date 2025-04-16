
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, Calendar as CalendarCheck, CheckCircle, Circle } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';

type Stall = {
  id: number;
  name: string;
  status: 'available' | 'occupied';
};

// Mock data - stable stalls
const stableData: Stall[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Stall ${i + 1}`,
  status: Math.random() > 0.3 ? 'available' : 'occupied',
}));

// Mock competition data
const competitions = [
  { id: '1', name: 'Tashkent Spring Championship' },
  { id: '2', name: 'Samarkand Classic Cup' },
  { id: '3', name: 'Bukhara International Horse Show' },
];

const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const competitionId = searchParams.get('competition');
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedStall, setSelectedStall] = useState<number | null>(null);
  const [selectedCompetition, setSelectedCompetition] = useState<string>(competitionId || '');
  const [horseDetails, setHorseDetails] = useState({
    name: '',
    breed: '',
    age: '',
    owner: '',
    rider: ''
  });
  const { toast } = useToast();

  const handleSelectStall = (stallId: number) => {
    setSelectedStall(stallId === selectedStall ? null : stallId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHorseDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedStall) {
      toast({
        title: "Selection required",
        description: "Please select a stall before booking",
        variant: "destructive"
      });
      return;
    }

    if (!horseDetails.name || !horseDetails.owner || !horseDetails.rider) {
      toast({
        title: "Information required",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking successful!",
      description: `You have booked Stall ${selectedStall} for ${horseDetails.name}`,
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Book a Stall</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Secure a stall for your horse at upcoming competitions in Uzbekistan.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column - Stall Selection */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Select a Stall</CardTitle>
                  <CardDescription>Choose an available stall for your horse</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="competition">Competition</Label>
                      <Select 
                        value={selectedCompetition} 
                        onValueChange={setSelectedCompetition}
                      >
                        <SelectTrigger id="competition">
                          <SelectValue placeholder="Select a competition" />
                        </SelectTrigger>
                        <SelectContent>
                          {competitions.map((competition) => (
                            <SelectItem key={competition.id} value={competition.id}>
                              {competition.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !selectedDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, 'PPP') : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-100 border-2 border-green-600 rounded-md mr-2"></div>
                        <span className="text-sm">Available</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-red-100 border-2 border-red-600 rounded-md mr-2"></div>
                        <span className="text-sm">Occupied</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-accent/10 border-2 border-accent rounded-md mr-2"></div>
                        <span className="text-sm">Selected</span>
                      </div>
                    </div>

                    <div className="stable-grid">
                      {stableData.map((stall) => (
                        <div
                          key={stall.id}
                          className={cn(
                            "stable-stall",
                            stall.status === 'available' ? 'available' : 'occupied',
                            selectedStall === stall.id && 'selected'
                          )}
                          onClick={() => stall.status === 'available' && handleSelectStall(stall.id)}
                        >
                          <div className="text-center">
                            <div className="text-lg font-semibold">{stall.id}</div>
                            {selectedStall === stall.id ? (
                              <CheckCircle className="h-6 w-6 text-accent mx-auto mt-2" />
                            ) : stall.status === 'available' ? (
                              <Circle className="h-6 w-6 text-green-600 mx-auto mt-2" />
                            ) : (
                              <Circle className="h-6 w-6 text-red-600 mx-auto mt-2 fill-current" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Horse Details Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Horse Details</CardTitle>
                  <CardDescription>Provide information about your horse</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Horse Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Enter horse name" 
                        value={horseDetails.name} 
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="breed">Breed</Label>
                      <Input 
                        id="breed" 
                        name="breed" 
                        placeholder="Enter breed" 
                        value={horseDetails.breed} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input 
                        id="age" 
                        name="age" 
                        placeholder="Enter age" 
                        type="number" 
                        min="1" 
                        max="30" 
                        value={horseDetails.age} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="owner">Owner Name *</Label>
                      <Input 
                        id="owner" 
                        name="owner" 
                        placeholder="Enter owner name" 
                        value={horseDetails.owner} 
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="rider">Rider Name *</Label>
                      <Input 
                        id="rider" 
                        name="rider" 
                        placeholder="Enter rider name" 
                        value={horseDetails.rider} 
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={!selectedStall}
                      >
                        Book Stall
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex-col items-start">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Note:</span> You will create a custom access code for this stall after booking is confirmed.
                  </p>
                  {selectedStall && (
                    <div className="mt-4 w-full p-3 bg-green-50 border border-green-200 rounded-md">
                      <div className="flex">
                        <CalendarCheck className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <p className="text-sm text-green-800">
                          You are about to book <span className="font-semibold">Stall {selectedStall}</span> {selectedDate && `for ${format(selectedDate, 'PPP')}`}
                        </p>
                      </div>
                    </div>
                  )}
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
