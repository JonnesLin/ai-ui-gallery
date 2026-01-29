'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function NatureDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 via-emerald-100 to-teal-200 p-4">
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        theme="pastel"
        size="md"
        clearable
      />
    </div>
  );
}
