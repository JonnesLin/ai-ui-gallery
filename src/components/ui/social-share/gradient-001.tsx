'use client';

import { SocialShare } from './SocialShare';

export default function GradientSocialShare() {
  const url = 'https://example.com/article';
  const title = 'Share the Love';
  const description = 'Let your friends know about this';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Share the Love
            </h3>
            <p className="text-gray-600 text-sm">Let your friends know about this</p>
          </div>

          <div className="space-y-3 flex flex-col">
            <SocialShare
              url={url}
              title={title}
              description={description}
              platforms={['facebook', 'twitter', 'linkedin', 'whatsapp']}
              theme="gradient"
              variant="button"
              size="lg"
              className="flex-col"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
