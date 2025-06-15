import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
const CovidNotice = () => {
  return <section className="py-16 bg-green-100">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-red-200">
          <CardHeader className="bg-teal-200">
            <CardTitle className="text-2xl text-red-800 text-center">COVID-19 Update</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4 text-gray-700">
              <p className="italic">
                "The American Dental Association recognizes the unprecedented and extraordinary circumstances 
                dentists and all health care professionals face related to growing concern about COVID-19," 
                according to the March 16 statement from ADA President Chad P. Gehani.
              </p>
              
              <p>
                "The ADA is deeply concerned for the health and well-being of the public and the dental team. 
                In order for dentistry to do its part to mitigate the spread of COVID-19, the ADA recommends 
                dentists nationwide postpone elective procedures for the next three weeks. Concentrating on 
                emergency dental care will allow us to care for our emergency patients and alleviate the burden 
                that dental emergencies would place on hospital emergency departments."
              </p>

              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                <p className="font-semibold text-yellow-800 mb-2">For Current Patients:</p>
                <p className="text-yellow-700 mb-3">
                  Current Dental Care of South Florida patients experiencing a dental emergency can call us 
                  for further instructions.
                </p>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white" onClick={() => window.open('tel:305-245-0304')}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call (305) 245-0304
                </Button>
              </div>

              <div className="border-l-4 border-red-500 p-4 rounded bg-slate-100">
                <p className="font-semibold text-red-800 mb-2">Important Notice:</p>
                <p className="text-red-700">
                  All other patients: Thank you for your patience during this time. We are closed during 
                  the COVID-19 Pandemic until further notice. We will follow the ADA and all governing 
                  guidelines and update our site once we reopen.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default CovidNotice;