
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Dental Care of South Florida offers a family-oriented environment focusing on quality dental care. 
              Our team of providers are experienced with over 20 years serving the South Florida community. 
              We take pride in our reputation and in the attention that we are able to provide our patients. 
              You and your family can feel comfortable choosing us for all your dental care needs.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <Card className="p-4">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </CardContent>
            </Card>
            
            <Card className="p-4">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-green-600 mb-2">3,129</div>
                <div className="text-sm text-gray-600">Smiling Clients</div>
              </CardContent>
            </Card>
            
            <Card className="p-4">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-purple-600 mb-2">7</div>
                <div className="text-sm text-gray-600">Happy Staff</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Section */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-lg text-gray-700 mb-2">We are conveniently located at:</p>
                <p className="text-xl font-semibold text-blue-600 mb-4">
                  127 N.E. 8 Street<br />
                  Homestead, FL 33030
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Directions from Florida's Turnpike (Exit 2 – Campbell Drive):</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Head West on Campbell Drive</li>
                  <li>• Turn Right onto N.E. 2nd Avenue</li>
                  <li>• Turn Left onto N.E. 1st Avenue</li>
                  <li>• Parking is reserved for Building 127 (Left)</li>
                  <li>• We are the <strong>BLUE building</strong> located off Campbell Drive</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
