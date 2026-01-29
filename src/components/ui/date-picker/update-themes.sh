#!/bin/bash

# 定义主题列表和对应的背景
declare -A themes=(
  ["brutalist"]="bg-orange-50"
  ["corporate"]="bg-slate-100"
  ["cyberpunk"]="bg-black"
  ["futuristic"]="bg-slate-900"
  ["gradient"]="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
  ["luxury"]="bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-700"
  ["monochrome"]="bg-gray-100"
  ["nature"]="bg-gradient-to-br from-green-400 to-emerald-600"
  ["neon"]="bg-gray-900"
  ["pastel"]="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200"
  ["playful"]="bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-300"
  ["retro"]="bg-amber-100"
  ["sketch"]="bg-gray-50"
  ["3d"]="bg-gray-100"
)

cd /Users/linjinhong/Documents/MoneyProject/AI-UI-gallery/src/components/ui/date-picker

for theme in "${!themes[@]}"; do
  file="${theme}-001.tsx"
  bg="${themes[$theme]}"

  # 将主题名首字母大写
  theme_cap=$(echo "$theme" | sed 's/\(.\)/\U\1/')
  if [ "$theme" == "3d" ]; then
    theme_cap="ThreeD"
  fi

  cat > "$file" << EOF
'use client';

import { useState } from 'react';
import { DatePicker } from './DatePicker';

export default function ${theme_cap}DatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen ${bg} p-4">
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        theme="${theme}"
        size="md"
        clearable
      />
    </div>
  );
}
EOF

  echo "Updated ${file}"
done

echo "All theme files updated!"
