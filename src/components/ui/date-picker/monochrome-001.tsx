'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function MonochromeDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        theme="monochrome"
        size="md"
        clearable
      />
    </div>
  );
}
