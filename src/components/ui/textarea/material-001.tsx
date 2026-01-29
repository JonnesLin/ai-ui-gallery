'use client';

import { useState } from 'react';
import { Textarea } from './Textarea';

export default function MaterialTextarea() {
  const [comment, setComment] = useState('');
  const [feedback, setFeedback] = useState('');
  const maxLength = 200;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Material Textarea</h2>
          <p className="text-sm text-gray-600">Google Material Design multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Textarea
            theme="material"
            label="Basic"
            rows={4}
            placeholder="Enter your text"
          />

          <Textarea
            theme="material"
            variant="filled"
            label="Message"
            rows={4}
            placeholder="Type your message"
          />

          <Textarea
            theme="material"
            size="sm"
            label="Small"
            rows={3}
            placeholder="Small textarea"
          />

          <Textarea
            theme="material"
            size="lg"
            variant="filled"
            label="Large"
            rows={6}
            placeholder="Large textarea"
          />

          <Textarea
            theme="material"
            variant="filled"
            label="With Counter"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            placeholder="With counter"
            maxLength={maxLength}
            showCount
          />

          <Textarea
            theme="material"
            label="Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            placeholder="Feedback"
            helperText="Please provide detailed feedback"
          />

          <Textarea
            theme="material"
            label="Error"
            rows={4}
            placeholder="Error state"
            error="This field is required"
          />

          <Textarea
            theme="material"
            variant="filled"
            label="Success"
            rows={4}
            placeholder="Success state"
            defaultValue="This is valid input"
            helperText="Looks good!"
          />

          <Textarea
            theme="material"
            variant="filled"
            label="Disabled"
            rows={4}
            placeholder="Disabled"
            disabled
          />

          <Textarea
            theme="material"
            variant="outlined"
            label="Outlined"
            rows={4}
            placeholder="Outlined"
          />

          <Textarea
            theme="material"
            label="With Elevation"
            rows={4}
            placeholder="With elevation"
            className="shadow-md rounded-lg"
          />

          <Textarea
            theme="material"
            size="sm"
            variant="filled"
            label="Dense"
            rows={3}
            placeholder="Dense"
          />
        </div>
      </div>
    </div>
  );
}
