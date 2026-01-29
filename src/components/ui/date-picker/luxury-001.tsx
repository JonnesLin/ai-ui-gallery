'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function LuxuryDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-amber-950 to-gray-900 p-4">
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        theme="luxury"
        size="md"
        clearable
      />
    </div>
  );
}
