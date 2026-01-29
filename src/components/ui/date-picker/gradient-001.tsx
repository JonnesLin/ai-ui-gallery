'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function GradientDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        theme="gradient"
        size="md"
        clearable
      />
    </div>
  );
}
