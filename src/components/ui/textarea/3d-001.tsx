'use client';

import { useState } from 'react';

export default function ThreeDTextarea() {
  const [comment, setComment] = useState('');
  const [feedback, setFeedback] = useState('');
  const maxLength = 200;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">3D Textarea</h2>
          <p className="text-sm text-gray-600">Multi-layered shadows and depth effects</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Basic Elevated */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Basic Elevated</label>
            <textarea
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.05)] focus:shadow-[0_10px_20px_rgba(59,130,246,0.15),0_4px_8px_rgba(0,0,0,0.1)] transition-shadow resize-none"
              rows={4}
              placeholder="Enter your text..."
            />
          </div>

          {/* Deep Inset */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Deep Inset</label>
            <textarea
              className="w-full px-4 py-3 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(0,0,0,0.08)] focus:shadow-[inset_0_3px_6px_rgba(59,130,246,0.1),inset_0_2px_4px_rgba(0,0,0,0.06)] transition-shadow resize-none"
              rows={4}
              placeholder="Type your message..."
            />
          </div>

          {/* Small Raised */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Small Raised</label>
            <textarea
              className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-purple-400 shadow-[0_2px_4px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.04)] focus:shadow-[0_6px_12px_rgba(168,85,247,0.12),0_3px_6px_rgba(0,0,0,0.08)] transition-shadow resize-none"
              rows={3}
              placeholder="Small textarea..."
            />
          </div>

          {/* Large Floating */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Large Floating</label>
            <textarea
              className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-400 shadow-[0_8px_16px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] focus:shadow-[0_20px_40px_rgba(99,102,241,0.15),0_10px_20px_rgba(0,0,0,0.1)] focus:translate-y-[-2px] transition-all resize-none"
              rows={6}
              placeholder="Large textarea..."
            />
          </div>

          {/* With Character Count - Layered */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">With Counter (Layered)</label>
            <div className="relative">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-4 py-3 bg-gradient-to-b from-white to-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-emerald-400 shadow-[0_4px_6px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.5)] focus:shadow-[0_8px_16px_rgba(16,185,129,0.12),0_4px_8px_rgba(0,0,0,0.08)] transition-shadow resize-none"
                rows={4}
                placeholder="Max 200 characters..."
                maxLength={maxLength}
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-white border border-gray-200 rounded-md text-xs font-medium text-gray-700 shadow-[0_2px_4px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)]">
                {comment.length}/{maxLength}
              </div>
            </div>
          </div>

          {/* Pressed Effect */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Pressed Effect</label>
            <textarea
              className="w-full px-4 py-3 bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-gray-400 shadow-[inset_0_4px_8px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(0,0,0,0.08),0_1px_0_rgba(255,255,255,0.5)] focus:shadow-[inset_0_6px_12px_rgba(0,0,0,0.12),inset_0_3px_6px_rgba(0,0,0,0.1)] transition-shadow resize-none"
              rows={4}
              placeholder="Pressed inward effect..."
            />
          </div>

          {/* Error State - Multi-layer */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Error State</label>
            <textarea
              className="w-full px-4 py-3 bg-red-50 border border-red-300 rounded-lg text-gray-900 placeholder:text-red-300 focus:outline-none focus:border-red-500 shadow-[0_4px_6px_rgba(239,68,68,0.1),0_2px_4px_rgba(239,68,68,0.08),inset_0_1px_2px_rgba(239,68,68,0.05)] focus:shadow-[0_8px_16px_rgba(239,68,68,0.15),0_4px_8px_rgba(239,68,68,0.1)] transition-shadow resize-none"
              rows={4}
              placeholder="This field has an error..."
            />
            <p className="text-sm text-red-600 font-medium">This field is required</p>
          </div>

          {/* Success State - Elevated */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Success State</label>
            <textarea
              className="w-full px-4 py-3 bg-emerald-50 border border-emerald-300 rounded-lg text-gray-900 placeholder:text-emerald-300 focus:outline-none focus:border-emerald-500 shadow-[0_4px_6px_rgba(16,185,129,0.1),0_2px_4px_rgba(16,185,129,0.08),0_1px_2px_rgba(16,185,129,0.06)] focus:shadow-[0_8px_16px_rgba(16,185,129,0.15),0_4px_8px_rgba(16,185,129,0.1)] transition-shadow resize-none"
              rows={4}
              defaultValue="Valid input with success state"
            />
            <p className="text-sm text-emerald-600 font-medium">Looks perfect!</p>
          </div>

          {/* Disabled State - Flat */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-400">Disabled State</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-400 placeholder:text-gray-300 cursor-not-allowed shadow-[0_1px_2px_rgba(0,0,0,0.03)] resize-none"
              rows={4}
              placeholder="Disabled textarea..."
              disabled
            />
          </div>

          {/* Extreme Depth */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Extreme Depth</label>
            <textarea
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-violet-400 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.07),0_8px_16px_rgba(0,0,0,0.09),0_16px_32px_rgba(0,0,0,0.11)] focus:shadow-[0_2px_4px_rgba(139,92,246,0.1),0_8px_16px_rgba(139,92,246,0.12),0_16px_32px_rgba(139,92,246,0.14),0_32px_64px_rgba(139,92,246,0.16)] focus:translate-y-[-4px] transition-all resize-none"
              rows={4}
              placeholder="Maximum depth effect..."
            />
          </div>

          {/* Neumorphic Soft */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Neumorphic Soft</label>
            <div className="bg-gray-200 p-6 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]">
              <textarea
                className="w-full px-4 py-3 bg-gray-200 border-none rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] focus:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.12),inset_-6px_-6px_12px_rgba(255,255,255,0.95)] transition-shadow resize-none"
                rows={4}
                placeholder="Soft neumorphic style..."
              />
            </div>
          </div>

          {/* With Counter - Feedback */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Feedback with Counter</label>
            <div className="relative">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 shadow-[0_3px_6px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] focus:shadow-[0_6px_12px_rgba(59,130,246,0.12),0_4px_8px_rgba(0,0,0,0.08)] transition-shadow resize-none"
                rows={4}
                placeholder="Share your feedback..."
                maxLength={maxLength}
              />
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded shadow-[0_2px_4px_rgba(0,0,0,0.2),0_1px_2px_rgba(0,0,0,0.1)] text-xs font-semibold text-white">
                {feedback.length}/{maxLength}
              </div>
            </div>
            <p className="text-sm text-gray-600">We value your detailed feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}
