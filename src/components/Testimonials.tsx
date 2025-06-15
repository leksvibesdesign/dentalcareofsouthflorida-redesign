
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      text: "My family has been seeing Dr. Alvarez for over 20 years at her Miami office. My insurance changed and I was told that at the Homestead office they took my insurance. I'm glad that I was able to still see her.",
      author: "Jaqueline Lorick"
    },
    {
      text: "I was looking for Lourdes after she left (previous employer). I saw that she had her own office now on Campbell Drive! She's the only person I let clean my teeth.",
      author: "Ramiro Rios"
    },
    {
      text: "Lourdes es la mejor y la Doctora es muy especial para mi...!",
      author: "Jorge Cruz"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Happy Patients</h2>
          <div className="w-24 h-1 mx-auto mb-4" style={{ backgroundColor: '#08A3A8' }}></div>
          <p className="text-lg text-gray-600">See what our patients have to say about their experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4" style={{ color: '#08A3A8' }}>"</div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-800">- {testimonial.author}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
