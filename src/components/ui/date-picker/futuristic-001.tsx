'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function FuturisticDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        theme="futuristic"
        size="md"
        clearable
      />
    </div>
  );
}
