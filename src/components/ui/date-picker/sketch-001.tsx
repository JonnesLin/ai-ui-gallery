'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function SketchDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        theme="minimalist"
        size="md"
        clearable
      />
    </div>
  );
}
