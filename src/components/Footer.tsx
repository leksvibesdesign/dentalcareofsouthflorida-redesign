
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4">Dental Care of South Florida</h3>
            <p className="text-gray-300 mb-4">Quality dental care for the whole family</p>
            
            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-4">
              <div className="flex space-x-4">
                <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Google+</a>
                <a href="#" className="text-red-500 hover:text-red-400 transition-colors">Yelp</a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          
          <Separator className="bg-gray-600 mb-6" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2016 by Dental Care of South Florida. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
