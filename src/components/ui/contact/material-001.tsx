import { ContactForm, ContactInfo } from './index';
import type { ContactField } from './types';

const formFields: ContactField[] = [
  { name: 'firstName', label: 'First name', type: 'text', required: true },
  { name: 'lastName', label: 'Last name', type: 'text', required: true },
  { name: 'email', label: 'Email address', type: 'email', required: true },
  { name: 'phone', label: 'Phone number', type: 'tel' },
  { name: 'message', label: 'Your message', type: 'textarea', required: true, rows: 4 },
];

export default function MaterialContact() {
  const handleSubmit = (data: Record<string, string>) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-medium text-gray-900 mb-2">Contact</h1>
          <p className="text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">Send us a message</h2>
            <ContactForm
              theme="material"
              fields={formFields}
              onSubmit={handleSubmit}
            />
          </div>

          <ContactInfo
            theme="material"
            address="789 Material Drive&#10;Mountain View, CA 94043&#10;United States"
            email="contact@material.design"
            phone="+1 (555) 789-0123"
            hours="Monday - Friday: 9:00 - 18:00&#10;Saturday: 10:00 - 16:00&#10;Sunday: Closed"
          />
        </div>
      </div>
    </div>
  );
}
