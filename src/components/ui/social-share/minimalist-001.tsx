'use client';

import { SocialShare } from './SocialShare';

export default function MinimalistSocialShare() {
  const url = 'https://example.com/article';
  const title = 'Check this out!';
  const description = 'An amazing article you should read';

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-8">
      <div className="w-full max-w-md">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Share this article</h3>

        <SocialShare
          url={url}
          title={title}
          description={description}
          platforms={['facebook', 'twitter', 'linkedin', 'whatsapp']}
          theme="minimalist"
          variant="icon"
          size="md"
        />
      </div>
    </div>
  );
}
