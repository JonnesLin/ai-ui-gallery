'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function NeonDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4">
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        theme="cyberpunk"
        size="md"
        clearable
      />
    </div>
  );
}
