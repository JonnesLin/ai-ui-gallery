import { Textarea } from './Textarea';

export default function NeumorphismTextarea() {
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">Neumorphism Textarea</h2>
          <p className="text-sm text-gray-600">Soft UI multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Textarea
            theme="neumorphism"
            label="Basic"
            rows={4}
            placeholder="Enter your text..."
          />

          <Textarea
            theme="neumorphism"
            label="Message"
            rows={4}
            placeholder="Type your message..."
          />

          <Textarea
            theme="neumorphism"
            size="sm"
            label="Small"
            rows={3}
            placeholder="Small textarea..."
          />

          <Textarea
            theme="neumorphism"
            size="lg"
            label="Large"
            rows={6}
            placeholder="Large textarea..."
          />

          <Textarea
            theme="neumorphism"
            label="With Counter"
            rows={4}
            placeholder="Max 200 characters..."
            maxLength={200}
            showCount
          />

          <Textarea
            theme="neumorphism"
            label="Error"
            rows={4}
            placeholder="This field has an error..."
            error="This field is required"
          />

          <Textarea
            theme="neumorphism"
            label="Disabled"
            rows={4}
            placeholder="Disabled textarea..."
            disabled
          />

          <Textarea
            theme="neumorphism"
            label="Comments"
            rows={4}
            placeholder="Add your comments..."
            helperText="Please be respectful and constructive"
          />
        </div>
      </div>
    </div>
  );
}
