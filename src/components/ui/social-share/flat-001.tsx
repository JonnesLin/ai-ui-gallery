'use client';

import { SocialShare } from './SocialShare';

export default function FlatSocialShare() {
  const url = 'https://example.com/article';
  const title = 'Check this out!';
  const description = 'An amazing article you should read';

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="bg-gray-50 rounded-none p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Share this content</h3>
          <p className="text-gray-600 mb-8">Click to share on social media</p>

          <SocialShare
            url={url}
            title={title}
            description={description}
            platforms={['facebook', 'twitter', 'linkedin', 'whatsapp', 'email']}
            theme="flat"
            variant="button"
            size="lg"
          />
        </div>

        <div className="bg-gray-100 rounded-none p-8">
          <h4 className="text-lg font-bold text-gray-900 mb-6">Floating Style</h4>

          <SocialShare
            url={url}
            title={title}
            description={description}
            platforms={['facebook', 'twitter', 'linkedin', 'whatsapp']}
            theme="flat"
            variant="icon"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
