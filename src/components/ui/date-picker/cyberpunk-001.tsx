'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function CyberpunkDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
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
