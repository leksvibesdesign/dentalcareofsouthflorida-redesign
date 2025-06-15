
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const providers = [
    {
      name: "Dr. Nimia Alvarez",
      image: "/lovable-uploads/84b04d58-52f5-4fcc-8c8b-8e7a54f9115d.png",
      role: "Doctor"
    },
    {
      name: "Dr. Carlos San Juan", 
      image: "/lovable-uploads/4a4e07b5-f7e8-4817-9403-068d2904008a.png",
      role: "Doctor"
    },
    {
      name: "Lourdes Pacheco, RDH",
      image: "/lovable-uploads/06e0995c-cd9a-4262-867a-063411c41bee.png",
      role: "Registered Dental Hygienist"
    }
  ];

  return (
    <section id="providers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Providers</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced team of dental professionals is dedicated to providing you with the highest quality care in a comfortable, family-friendly environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {providers.map((provider, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src={provider.image}
                    alt={provider.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-md"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{provider.name}</h3>
                <p className="text-blue-600 font-medium">{provider.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
