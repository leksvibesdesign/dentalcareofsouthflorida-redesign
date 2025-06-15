
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-[#08A3A8]">Dental Care of South Florida</span>
            </h1>
            
            <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6 rounded">
              <h2 className="text-2xl font-bold text-green-700 mb-2">
                $90 New Patient Special
              </h2>
              <p className="text-green-600 text-lg">
                Regular Cleaning, Exam, and X-rays
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button 
                size="lg" 
                onClick={() => window.open('tel:305-245-0304')} 
                className="text-white px-8 py-3 hover:opacity-90"
                style={{ backgroundColor: '#115A79' }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 305-245-0304
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 hover:text-white"
                style={{ 
                  borderColor: '#08A3A8', 
                  color: '#08A3A8'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#08A3A8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Book an Appointment
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <span className="text-gray-600">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">Instagram</a>
                <a href="#" className="text-red-500 hover:text-red-600 transition-colors">Yelp</a>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">Facebook</a>
                <a href="#" className="text-red-400 hover:text-red-500 transition-colors">Google+</a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/409653d4-6bd4-4ac7-ac38-6ae19573704a.png" 
              alt="Happy patient at dental clinic" 
              className="rounded-lg shadow-lg max-w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
