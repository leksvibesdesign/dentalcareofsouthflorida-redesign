
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/lovable-uploads/409653d4-6bd4-4ac7-ac38-6ae19573704a.png")'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-[#08A3A8]">Dental Care of South Florida</span>
          </h1>
          
          <div className="bg-green-100 bg-opacity-95 border-l-4 border-green-500 p-6 mb-8 rounded shadow-lg inline-block">
            <h2 className="text-3xl font-bold text-green-700 mb-2">
              $90 New Patient Special
            </h2>
            <p className="text-green-600 text-xl">
              Regular Cleaning, Exam, and X-rays
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              onClick={() => window.open('tel:305-245-0304')} 
              className="text-white px-8 py-4 text-lg hover:opacity-90 shadow-lg"
              style={{ backgroundColor: '#115A79' }}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call 305-245-0304
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg hover:text-white bg-white bg-opacity-90 shadow-lg"
              style={{ 
                borderColor: '#08A3A8', 
                color: '#08A3A8'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#08A3A8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              }}
            >
              Book an Appointment
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            <span className="text-white text-lg">Follow us:</span>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-300 hover:text-pink-200 transition-colors text-lg">Instagram</a>
              <a href="#" className="text-red-300 hover:text-red-200 transition-colors text-lg">Yelp</a>
              <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors text-lg">Facebook</a>
              <a href="#" className="text-red-200 hover:text-red-100 transition-colors text-lg">Google+</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
