'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function ThreeDDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-200 via-blue-100 to-slate-200 p-4">
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        theme="neumorphism"
        size="md"
        clearable
      />
    </div>
  );
}
