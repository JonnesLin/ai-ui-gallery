#!/bin/bash

# Batch update all theme files to use the new FileUpload component

THEMES=(
  "3d"
  "brutalist"
  "corporate"
  "cyberpunk"
  "futuristic"
  "gradient"
  "luxury"
  "monochrome"
  "nature"
  "neon"
  "pastel"
  "playful"
  "retro"
  "sketch"
)

BACKGROUNDS=(
  "3d:min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center p-8"
  "brutalist:min-h-screen bg-yellow-400 flex items-center justify-center p-8"
  "corporate:min-h-screen bg-[#f8f9fa] flex items-center justify-center p-8"
  "cyberpunk:min-h-screen bg-black flex items-center justify-center p-8"
  "futuristic:min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-8"
  "gradient:min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center p-8"
  "luxury:min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-8"
  "monochrome:min-h-screen bg-white flex items-center justify-center p-8"
  "nature:min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-8"
  "neon:min-h-screen bg-black flex items-center justify-center p-8"
  "pastel:min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-8"
  "playful:min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-300 flex items-center justify-center p-8"
  "retro:min-h-screen bg-[#f5e6d3] flex items-center justify-center p-8"
  "sketch:min-h-screen bg-white flex items-center justify-center p-8"
)

for theme in "${THEMES[@]}"; do
  FILE="${theme}-001.tsx"

  # Get component name (capitalize first letter)
  COMPONENT_NAME="$(echo ${theme^} | sed 's/-\(.\)/\U\1/g')FileUpload"

  # Get background for this theme
  BG=""
  for entry in "${BACKGROUNDS[@]}"; do
    if [[ $entry == ${theme}:* ]]; then
      BG="${entry#*:}"
      break
    fi
  done

  if [ -z "$BG" ]; then
    BG="min-h-screen bg-gray-50 flex items-center justify-center p-8"
  fi

  # Create new file content
  cat > "$FILE" << EOF
'use client';

import { FileUpload } from './FileUpload';

export default function ${COMPONENT_NAME}() {
  return (
    <div className="${BG}">
      <FileUpload theme="${theme}" accept=".png,.jpg,.jpeg,.pdf" />
    </div>
  );
}
EOF

  echo "Updated ${FILE}"
done

echo "All theme files have been updated!"
