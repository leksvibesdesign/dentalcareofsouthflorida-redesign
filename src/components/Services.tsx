
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Problem Focused Exam",
      description: "If you are experiencing tooth pain or have an area of concern, the doctor will take an X-ray of the problem area and examine it to determine the culprit."
    },
    {
      title: "Dental Hygiene", 
      description: "It is important to maintain your dental hygiene to prevent the onset of gum disease and dental caries. Routine visits can save you time and money in the long-term."
    },
    {
      title: "Dental Fillings",
      description: "Dental fillings are done to restore tooth decay that has been caused by dental caries."
    },
    {
      title: "Emergency Dentistry",
      description: "If you are experiencing a sudden onset of tooth pain, please contact our office as soon as possible. We will try our best to accommodate your visit for that same day."
    },
    {
      title: "Orthodontic Treatment",
      description: "Our orthodontic treatments include the latest procedures and materials. Most treatments last only 18 months. We also offer preventative orthodontics for children under the age of 10 and adult treatments. Visit the gallery to see the results."
    },
    {
      title: "Dentures, Bridges, and Implants",
      description: "We offer several options to give the appearance and confidence of a full smile. Schedule a visit for a free consultation to find out how."
    },
    {
      title: "Teeth Whitening",
      description: "Whitening the teeth is aesthetically pleasing. It can give the patient a more youthful appearance. We offer in-office and take-home options to fit your needs."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 mx-auto mb-4" style={{ backgroundColor: '#08A3A8' }}></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive dental care for the whole family with state-of-the-art technology and personalized treatment plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: '#08A3A8' }}>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
