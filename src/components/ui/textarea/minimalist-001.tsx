import { Textarea } from './Textarea';

export default function MinimalistTextarea() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-gray-900">Minimalist Textarea</h2>
          <p className="text-xs text-gray-500">Clean and simple multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Textarea
            theme="minimalist"
            label="Basic"
            rows={4}
            placeholder="Enter your text..."
          />

          <Textarea
            theme="minimalist"
            label="Message"
            rows={4}
            placeholder="Type your message..."
          />

          <Textarea
            theme="minimalist"
            size="sm"
            label="Small"
            rows={3}
            placeholder="Small textarea..."
          />

          <Textarea
            theme="minimalist"
            size="lg"
            label="Large"
            rows={6}
            placeholder="Large textarea..."
          />

          <Textarea
            theme="minimalist"
            label="With Counter"
            rows={4}
            placeholder="Max 200 characters..."
            maxLength={200}
            showCount
          />

          <Textarea
            theme="minimalist"
            label="Error"
            rows={4}
            placeholder="This field has an error..."
            error="This field is required"
          />

          <Textarea
            theme="minimalist"
            label="Disabled"
            rows={4}
            placeholder="Disabled textarea..."
            disabled
          />

          <Textarea
            theme="minimalist"
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
