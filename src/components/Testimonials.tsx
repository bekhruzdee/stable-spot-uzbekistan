
import React from 'react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    content: "StableSpot has transformed how we prepare for competitions. No more stressful phone calls or uncertainty about stall availability.",
    author: "Alisher Tursunov",
    role: "Professional Rider",
  },
  {
    content: "As a coach managing multiple riders, this platform has saved me countless hours. I can easily book stalls for all my athletes in one place.",
    author: "Dinara Karimova",
    role: "Equestrian Coach",
  },
  {
    content: "The secure access system gives me peace of mind knowing that only authorized personnel can access my horse's stall during competitions.",
    author: "Rustam Ikramov",
    role: "Horse Owner",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by equestrians across Uzbekistan
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-base leading-7 text-foreground">"{testimonial.content}"</p>
                    <div className="mt-6">
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
