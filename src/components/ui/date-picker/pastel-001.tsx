'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function PastelDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4">
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
