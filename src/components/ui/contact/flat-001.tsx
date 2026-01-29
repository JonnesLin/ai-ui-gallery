import { ContactForm, ContactInfo } from './index';
import type { ContactField } from './types';

const formFields: ContactField[] = [
  { name: 'firstName', label: 'First Name', type: 'text', required: true, placeholder: 'John' },
  { name: 'lastName', label: 'Last Name', type: 'text', required: true, placeholder: 'Doe' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'john.doe@example.com' },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000' },
  { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'How can we help you?', rows: 5 },
];

export default function FlatContact() {
  const handleSubmit = (data: Record<string, string>) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">Contact Us</h1>
          <p className="text-gray-600 text-lg">We'd be happy to hear from you</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
            <ContactForm
              theme="flat"
              fields={formFields}
              onSubmit={handleSubmit}
            />
          </div>

          <ContactInfo
            theme="flat"
            address="456 Flat Street&#10;Design City, DC 45678&#10;United States"
            email="info@flatdesign.com"
            phone="+1 (555) 456-7890"
            hours="Mon - Fri: 9:00 AM - 6:00 PM&#10;Saturday: 10:00 AM - 4:00 PM&#10;Sunday: Closed"
          />
        </div>

        <div className="mt-8 bg-gray-300 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-3">🗺️</div>
            <p className="text-gray-600 font-medium">Map Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
