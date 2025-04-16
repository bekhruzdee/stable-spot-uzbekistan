
import React from 'react';
import { Calendar, MapPin, Lock, Clock, Award, Users } from 'lucide-react';

const features = [
  {
    name: 'Easy Booking',
    description:
      'Book stalls for your horses with just a few clicks, eliminating the need for phone calls and paperwork.',
    icon: Calendar,
  },
  {
    name: 'Location Details',
    description:
      'Get detailed information about competition venues, including maps, facilities, and directions.',
    icon: MapPin,
  },
  {
    name: 'Secure Access',
    description:
      "Custom access control ensures only authorized personnel can access your horse's stall.",
    icon: Lock,
  },
  {
    name: 'Real-time Availability',
    description:
      'See stall availability in real-time, making planning easier for riders and coaches.',
    icon: Clock,
  },
  {
    name: 'Competition Information',
    description:
      'Access details about upcoming competitions, including schedules, categories, and requirements.',
    icon: Award,
  },
  {
    name: 'Team Management',
    description:
      'Easily manage access for your team members including riders, coaches, and support staff.',
    icon: Users,
  },
];

const Features: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Efficient Stable Management</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to manage horse stalls for competitions
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our platform streamlines the process of booking and managing horse stalls for competitions,
            saving time and reducing stress for all stakeholders in the equestrian community.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
