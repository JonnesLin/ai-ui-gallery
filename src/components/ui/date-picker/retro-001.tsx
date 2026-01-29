'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function RetroDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-amber-200 to-orange-300 p-4">
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        theme="material"
        size="md"
        clearable
      />
    </div>
  );
}
