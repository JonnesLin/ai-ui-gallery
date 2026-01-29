'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function MaterialDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
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
