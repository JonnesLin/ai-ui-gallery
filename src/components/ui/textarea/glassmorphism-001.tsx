import { Textarea } from './Textarea';

export default function GlassmorphismTextarea() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
          <h2 className="text-lg font-semibold text-white mb-2">Glassmorphism Textarea</h2>
          <p className="text-sm text-white/80">Frosted glass effect multi-line input</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Textarea
            theme="glassmorphism"
            label="Basic"
            rows={4}
            placeholder="Enter your text..."
          />

          <Textarea
            theme="glassmorphism"
            label="Message"
            rows={4}
            placeholder="Type your message..."
          />

          <Textarea
            theme="glassmorphism"
            size="sm"
            label="Small"
            rows={3}
            placeholder="Small textarea..."
          />

          <Textarea
            theme="glassmorphism"
            size="lg"
            label="Large"
            rows={6}
            placeholder="Large textarea..."
          />

          <Textarea
            theme="glassmorphism"
            label="With Counter"
            rows={4}
            placeholder="Max 200 characters..."
            maxLength={200}
            showCount
          />

          <Textarea
            theme="glassmorphism"
            label="Error"
            rows={4}
            placeholder="This field has an error..."
            error="This field is required"
          />

          <Textarea
            theme="glassmorphism"
            label="Disabled"
            rows={4}
            placeholder="Disabled textarea..."
            disabled
          />

          <Textarea
            theme="glassmorphism"
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
