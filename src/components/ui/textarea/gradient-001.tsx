import { Textarea } from './Textarea';

export default function GradientTextarea() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Gradient Textarea
          </h2>
          <p className="text-sm text-gray-600">Colorful gradient multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Textarea
            theme="gradient"
            label="Basic"
            rows={4}
            placeholder="Enter your text..."
          />

          <Textarea
            theme="gradient"
            label="Message"
            rows={4}
            placeholder="Type your message..."
          />

          <Textarea
            theme="gradient"
            size="sm"
            label="Small"
            rows={3}
            placeholder="Small textarea..."
          />

          <Textarea
            theme="gradient"
            size="lg"
            label="Large"
            rows={6}
            placeholder="Large textarea..."
          />

          <Textarea
            theme="gradient"
            label="With Counter"
            rows={4}
            placeholder="Max 200 characters..."
            maxLength={200}
            showCount
          />

          <Textarea
            theme="gradient"
            label="Error"
            rows={4}
            placeholder="This field has an error..."
            error="This field is required"
          />

          <Textarea
            theme="gradient"
            label="Disabled"
            rows={4}
            placeholder="Disabled textarea..."
            disabled
          />

          <Textarea
            theme="gradient"
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
