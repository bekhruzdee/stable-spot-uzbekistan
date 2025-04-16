
import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Palette, Eye, EyeOff, Info } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from '@/lib/utils';

const colors = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Green", value: "green" },
  { name: "Yellow", value: "yellow" },
  { name: "Purple", value: "purple" },
  { name: "Pink", value: "pink" },
  { name: "Orange", value: "orange" },
  { name: "Brown", value: "brown" },
  { name: "Black", value: "black" },
  { name: "White", value: "white" },
];

const AuthPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get('tab') === 'register' ? 'register' : 'login';
  const { toast } = useToast();
  
  // Login state
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  
  // Register state
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    favoriteColor: '',
  });
  
  // Password visibility state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Handle login form changes
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle register form changes
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle login submit
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginForm.email || !loginForm.password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would call an API here
    toast({
      title: "Success",
      description: "You have been logged in successfully",
    });
  };
  
  // Handle register submit
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (
      !registerForm.name ||
      !registerForm.email ||
      !registerForm.password ||
      !registerForm.confirmPassword ||
      !registerForm.birthDay ||
      !registerForm.birthMonth ||
      !registerForm.birthYear ||
      !registerForm.favoriteColor
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (registerForm.password !== registerForm.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    // Password validation
    if (registerForm.password.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would call an API here
    toast({
      title: "Success",
      description: "Your account has been created successfully",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <Card className="w-full">
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              {/* Login Tab */}
              <TabsContent value="login">
                <form onSubmit={handleLoginSubmit}>
                  <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                      Enter your credentials to access your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        name="email"
                        placeholder="Enter your email" 
                        value={loginForm.email}
                        onChange={handleLoginChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"}
                          name="password" 
                          placeholder="Enter your password" 
                          value={loginForm.password}
                          onChange={handleLoginChange}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start">
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                    <Link to="/reset-password" className="text-sm text-primary mt-4 self-center">
                      Forgot your password?
                    </Link>
                  </CardFooter>
                </form>
              </TabsContent>
              
              {/* Register Tab */}
              <TabsContent value="register">
                <form onSubmit={handleRegisterSubmit}>
                  <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                      Enter your details to create a new account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="Enter your name" 
                        value={registerForm.name}
                        onChange={handleRegisterChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        name="email"
                        placeholder="Enter your email" 
                        value={registerForm.email}
                        onChange={handleRegisterChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Password</Label>
                      <div className="relative">
                        <Input 
                          id="new-password" 
                          type={showPassword ? "text" : "password"}
                          name="password" 
                          placeholder="Create a password" 
                          value={registerForm.password}
                          onChange={handleRegisterChange}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <div className="relative">
                        <Input 
                          id="confirm-password" 
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword" 
                          placeholder="Confirm your password" 
                          value={registerForm.confirmPassword}
                          onChange={handleRegisterChange}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <Label>Birth Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="ghost" size="icon" className="ml-1 h-4 w-4">
                              <Info size={14} />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <p className="text-sm text-muted-foreground">
                              Your birth date is used as part of your secure access code for horse stalls.
                              This information will be kept private.
                            </p>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <Input 
                            placeholder="Day" 
                            type="number"
                            min="1"
                            max="31"
                            name="birthDay"
                            value={registerForm.birthDay}
                            onChange={handleRegisterChange}
                          />
                        </div>
                        <div>
                          <Input 
                            placeholder="Month" 
                            type="number"
                            min="1"
                            max="12"
                            name="birthMonth"
                            value={registerForm.birthMonth}
                            onChange={handleRegisterChange}
                          />
                        </div>
                        <div>
                          <Input 
                            placeholder="Year" 
                            type="number"
                            min="1900"
                            max={new Date().getFullYear()}
                            name="birthYear"
                            value={registerForm.birthYear}
                            onChange={handleRegisterChange}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Label htmlFor="favorite-color">Favorite Color</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="ghost" size="icon" className="ml-1 h-4 w-4">
                              <Info size={14} />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <p className="text-sm text-muted-foreground">
                              Your favorite color is used as part of your secure access code for horse stalls.
                              Choose a color you'll remember easily.
                            </p>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <Select 
                        value={registerForm.favoriteColor}
                        onValueChange={(value) => setRegisterForm(prev => ({ ...prev, favoriteColor: value }))}
                      >
                        <SelectTrigger id="favorite-color" className="w-full">
                          <SelectValue placeholder="Select your favorite color" />
                        </SelectTrigger>
                        <SelectContent>
                          {colors.map((color) => (
                            <SelectItem key={color.value} value={color.value}>
                              <div className="flex items-center">
                                <div
                                  className={cn(
                                    "mr-2 h-4 w-4 rounded-full",
                                    color.value === "red" && "bg-red-500",
                                    color.value === "blue" && "bg-blue-500",
                                    color.value === "green" && "bg-green-500",
                                    color.value === "yellow" && "bg-yellow-500",
                                    color.value === "purple" && "bg-purple-500",
                                    color.value === "pink" && "bg-pink-500",
                                    color.value === "orange" && "bg-orange-500",
                                    color.value === "brown" && "bg-amber-800",
                                    color.value === "black" && "bg-black",
                                    color.value === "white" && "bg-white border border-gray-200"
                                  )}
                                ></div>
                                {color.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full">
                      Create Account
                    </Button>
                  </CardFooter>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
          
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Palette className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Your birth date and favorite color will be used to create a secure access code.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthPage;
