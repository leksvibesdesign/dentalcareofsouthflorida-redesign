
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#08A3A8' }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl" style={{ color: '#08A3A8' }}>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">
                  127 N.E. 8 Street<br />
                  Homestead, FL 33033
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-bold text-gray-800 mb-2">Contact Info</h3>
                <p className="text-gray-600 mb-1">
                  <strong>Phone:</strong> (305) 245-0304
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Fax:</strong> (305) 245-0306
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> dentalcareofsouthflorida@gmail.com
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-bold text-gray-800 mb-2">Opening Hours</h3>
                <div className="space-y-1 text-gray-600">
                  <p><strong>Monday:</strong> 8:30 AM – 5:00 PM</p>
                  <p><strong>Tuesday:</strong> 8:30 AM – 5:00 PM</p>
                  <p><strong>Wednesday:</strong> 8:30 AM – 5:00 PM</p>
                  <p><strong>Thursday:</strong> 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl" style={{ color: '#08A3A8' }}>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08A3A8] focus:border-transparent"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-white hover:opacity-90"
                  style={{ backgroundColor: '#08A3A8' }}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
