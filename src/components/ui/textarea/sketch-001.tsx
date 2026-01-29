'use client';

import { useState } from 'react';

export default function SketchTextarea() {
  const [comment, setComment] = useState('');
  const [feedback, setFeedback] = useState('');
  const maxLength = 200;

  return (
    <div className="min-h-screen bg-amber-50 p-8 font-['Comic_Sans_MS',_'Comic_Sans',_cursive]">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2 bg-white p-6 border-2 border-gray-800 rounded-[255px_15px_225px_15px/15px_225px_15px_255px]">
          <h2 className="text-2xl font-bold text-gray-800">Sketch Textarea</h2>
          <p className="text-sm text-gray-600">Hand-drawn style multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Basic Doodle */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-700">Basic Doodle</label>
            <textarea
              className="w-full px-4 py-3 bg-white border-2 border-gray-800 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-gray-600 focus:shadow-[4px_4px_0_rgba(0,0,0,0.2)] transition-shadow resize-none"
              rows={4}
              placeholder="Enter your text..."
            />
          </div>

          {/* Wavy Border */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-700">Wavy Border</label>
            <textarea
              className="w-full px-4 py-3 bg-yellow-50 border-2 border-dashed border-gray-800 rounded-[15px_255px_15px_225px/225px_15px_255px_15px] text-gray-900 placeholder:text-gray-600 focus:outline-none focus:border-gray-600 focus:bg-yellow-100 transition-all resize-none"
              rows={4}
              placeholder="Type your message..."
            />
          </div>

          {/* Small Sketchy */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-700">Small Sketchy</label>
            <textarea
              className="w-full px-3 py-2 text-sm bg-white border-2 border-gray-800 rounded-[225px_15px_255px_15px/15px_255px_15px_225px] text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-gray-600 focus:shadow-[2px_2px_0_rgba(0,0,0,0.15)] transition-shadow resize-none"
              rows={3}
              placeholder="Small textarea..."
            />
          </div>

          {/* Large Irregular */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-700">Large Irregular</label>
            <textarea
              className="w-full px-5 py-4 bg-blue-50 border-[3px] border-gray-800 rounded-[15px_225px_15px_255px/255px_15px_225px_15px] text-gray-900 placeholder:text-gray-600 focus:outline-none focus:border-blue-600 focus:shadow-[6px_6px_0_rgba(59,130,246,0.2)] transition-all resize-none"
              rows={6}
              placeholder="Large textarea..."
            />
          </div>

          {/* With Character Count - Hand-drawn Badge */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-700">With Counter</label>
            <div className="relative">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-4 py-3 bg-white border-2 border-gray-800 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-gray-600 focus:shadow-[3px_3px_0_rgba(0,0,0,0.15)] transition-shadow resize-none"
                rows={4}
                placeholder="Max 200 characters..."
                maxLength={maxLength}
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-gray-800 text-white text-xs font-bold rounded-[15px_5px_15px_5px/5px_15px_5px_15px] border-2 border-gray-900 shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
                {comment.length}/{maxLength}
              </div>
            </div>
          </div>

          {/* Dotted Whimsy */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-700">Dotted Whimsy</label>
            <textarea
              className="w-full px-4 py-3 bg-pink-50 border-[3px] border-dotted border-gray-800 rounded-[225px_15px_255px_15px/15px_255px_15px_225px] text-gray-900 placeholder:text-gray-600 focus:outline-none focus:border-pink-500 focus:bg-pink-100 transition-all resize-none"
              rows={4}
              placeholder="Whimsical dotted border..."
            />
          </div>

          {/* Error State - Rough */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-700">Error State</label>
            <textarea
              className="w-full px-4 py-3 bg-red-50 border-[3px] border-red-600 rounded-[225px_15px_255px_15px/15px_255px_15px_225px] text-gray-900 placeholder:text-red-400 focus:outline-none focus:border-red-700 focus:shadow-[4px_4px_0_rgba(220,38,38,0.2)] transition-all resize-none"
              rows={4}
              placeholder="This field has an error..."
            />
            <p className="text-sm text-red-600 font-bold">Oops! This field is required!</p>
          </div>

          {/* Success State - Cheerful */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-700">Success State</label>
            <textarea
              className="w-full px-4 py-3 bg-green-50 border-[3px] border-green-600 rounded-[15px_255px_15px_225px/225px_15px_255px_15px] text-gray-900 placeholder:text-green-400 focus:outline-none focus:border-green-700 focus:shadow-[4px_4px_0_rgba(22,163,74,0.2)] transition-all resize-none"
              rows={4}
              defaultValue="Great job! This looks perfect!"
            />
            <p className="text-sm text-green-600 font-bold">Awesome! Keep it up!</p>
          </div>

          {/* Disabled State - Faded */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-400">Disabled State</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-300 rounded-[15px_255px_15px_225px/225px_15px_255px_15px] text-gray-400 placeholder:text-gray-300 cursor-not-allowed resize-none"
              rows={4}
              placeholder="Disabled textarea..."
              disabled
            />
          </div>

          {/* Crayon Style */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-700">Crayon Style</label>
            <textarea
              className="w-full px-4 py-3 bg-purple-50 border-[3px] border-purple-600 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] text-gray-900 placeholder:text-purple-400 focus:outline-none focus:border-purple-700 focus:shadow-[5px_5px_0_rgba(147,51,234,0.2)] transition-all resize-none"
              rows={4}
              placeholder="Crayon-like border..."
            />
          </div>

          {/* Scribble Border */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-700">Scribble Border</label>
            <textarea
              className="w-full px-4 py-3 bg-orange-50 border-[3px] border-double border-orange-600 rounded-[225px_15px_255px_15px/15px_255px_15px_225px] text-gray-900 placeholder:text-orange-500 focus:outline-none focus:border-orange-700 focus:bg-orange-100 transition-all resize-none"
              rows={4}
              placeholder="Double scribble effect..."
            />
          </div>

          {/* With Counter - Feedback */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-700">Feedback Counter</label>
            <div className="relative">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full px-4 py-3 bg-green-50 border-2 border-dashed border-gray-800 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] text-gray-900 placeholder:text-gray-600 focus:outline-none focus:border-green-600 focus:shadow-[3px_3px_0_rgba(34,197,94,0.2)] transition-all resize-none"
                rows={4}
                placeholder="Share your thoughts..."
                maxLength={maxLength}
              />
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-white border-2 border-gray-800 rounded-[12px_3px_12px_3px/3px_12px_3px_12px] text-xs font-bold text-gray-800 shadow-[1px_1px_0_rgba(0,0,0,0.2)]">
                {feedback.length}/{maxLength}
              </div>
            </div>
            <p className="text-sm text-gray-600 font-bold">Doodle your ideas freely!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
