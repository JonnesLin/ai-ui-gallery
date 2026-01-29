'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function GlassmorphismDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-4">
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        theme="glassmorphism"
        size="md"
        clearable
      />
    </div>
  );
}
