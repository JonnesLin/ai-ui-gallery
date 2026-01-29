import { useState } from 'react';
import { Textarea } from './Textarea';

export default function FlatTextarea() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  const maxLength = 200;

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Flat Textarea</h2>
          <p className="text-xs font-bold text-slate-500">Bold colors and clean edges</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Textarea
            theme="flat"
            label="Message"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            rows={4}
            placeholder="Type your message..."
          />

          <Textarea
            theme="flat"
            label="Comments"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            rows={4}
            placeholder="Add your comments..."
          />

          <Textarea
            theme="flat"
            size="sm"
            label="Quick Note"
            rows={3}
            placeholder="Small textarea..."
          />

          <Textarea
            theme="flat"
            size="lg"
            label="Description"
            rows={6}
            placeholder="Large textarea..."
          />

          <Textarea
            theme="flat"
            label="With Counter"
            value={value3}
            onChange={(e) => setValue3(e.target.value)}
            rows={4}
            placeholder="Max 200 characters..."
            maxLength={maxLength}
            showCount
          />

          <Textarea
            theme="flat"
            label="Error State"
            rows={4}
            placeholder="This field has an error..."
            error="This field is required"
          />

          <Textarea
            theme="flat"
            label="Feedback"
            value={value4}
            onChange={(e) => setValue4(e.target.value)}
            rows={4}
            placeholder="Share your feedback..."
            helperText="Be respectful and constructive"
          />

          <Textarea
            theme="flat"
            label="Disabled"
            rows={4}
            placeholder="Disabled textarea..."
            disabled
          />
        </div>

        <div className="space-y-6">
          <Textarea
            theme="flat"
            label="Full Width Example"
            rows={5}
            placeholder="This textarea spans the full width..."
          />

          <Textarea
            theme="flat"
            variant="filled"
            label="Another Full Width"
            rows={5}
            placeholder="Bold borders and vibrant colors define flat design..."
          />
        </div>
      </div>
    </div>
  );
}
