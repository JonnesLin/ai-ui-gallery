# FileUpload Component System

A refactored file upload component system with theme support and clean architecture.

## Architecture

### Core Components

1. **FileUpload.tsx** - Main orchestrator component
   - Handles file state management
   - Validates files (type, size)
   - Simulates upload progress
   - Coordinates drag-and-drop functionality

2. **FileUploadDropzone.tsx** - Drop zone UI
   - Renders themed dropzone interface
   - Handles drag events
   - Displays file type hints

3. **FileUploadList.tsx** - File list container
   - Renders list of uploaded files
   - Passes theme to items

4. **FileUploadItem.tsx** - Individual file display
   - Shows file name, size, progress
   - Themed styling
   - Remove button

### Type System

**FileUpload.types.ts** - Complete TypeScript definitions
- `UploadedFile` - Extended File with upload metadata
- `FileUploadProps` - Main component props
- Component-specific prop interfaces

### Theme Integration

The system integrates with the centralized theme system at `src/components/ui/_themes/`.

Currently supported themes with simplified implementations:
- `minimalist` - Clean, minimal design
- `material` - Material Design inspired
- `dark` - Dark mode styling
- `glassmorphism` - Glass morphism effects
- `neumorphism` - Soft UI neumorphic style
- `flat` - Flat design

## Usage

```tsx
import { FileUpload } from './FileUpload';

function MyComponent() {
  return (
    <FileUpload
      theme="minimalist"
      accept=".png,.jpg,.pdf"
      maxSize={10}
      multiple
      onChange={(files) => console.log('Files added:', files)}
      onRemove={(file) => console.log('File removed:', file)}
    />
  );
}
```

## Props

```typescript
interface FileUploadProps {
  theme?: ThemeName;
  accept?: string;          // File types, e.g., ".png,.jpg,.pdf"
  multiple?: boolean;       // Allow multiple files
  maxFiles?: number;        // Maximum file count
  maxSize?: number;         // Maximum file size in MB
  onChange?: (files: File[]) => void;
  onRemove?: (file: UploadedFile) => void;
  onError?: (error: Error) => void;
  disabled?: boolean;
  variant?: 'dropzone' | 'button' | 'inline';
  className?: string;
}
```

## Design Principles

1. **No Fallbacks** - Direct error reporting for missing themes or invalid files
2. **Clear Data Flow** - Files → Validation → State → Upload Simulation
3. **Single Responsibility** - Each component handles one concern
4. **Type Safety** - Full TypeScript coverage
5. **Theme Consistency** - Uses centralized theme system

## File Validation

The system validates:
- File size (maxSize prop in MB)
- File type (accept prop with extensions or MIME types)
- File count (maxFiles prop)

Validation errors are reported via the `onError` callback.

## Upload Simulation

The component simulates file upload with progress tracking:
- Progress updates every 200ms
- 10% increment per update
- Status transitions: pending → uploading → completed

## Demo Files

Theme-specific demo files show the component with appropriate backgrounds:
- `minimalist-001.tsx`
- `material-001.tsx`
- `dark-001.tsx`
- `glassmorphism-001.tsx`
- `neumorphism-001.tsx`
- `flat-001.tsx`

Other theme files (`3d-001.tsx`, `brutalist-001.tsx`, etc.) contain full implementations with specialized visual effects that cannot be simplified to the theme system without losing their unique characteristics.

## Future Enhancements

Potential improvements:
1. Real upload integration (with backend API)
2. File preview support (images, PDFs)
3. Bulk operations (select all, remove all)
4. Custom validation rules
5. Progress customization
6. Retry failed uploads
