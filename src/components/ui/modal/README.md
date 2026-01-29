# Modal Component Refactoring

## Overview

This directory contains a composable Modal system with theme-based styling.

## Core Components

### Modal.tsx
- Main container with Portal rendering
- Handles body scroll lock
- ESC key and overlay click handling
- Sizes: sm, md, lg, xl, full

### ModalHeader.tsx
- Header section with optional close button
- Flexible content layout

### ModalContent.tsx
- Main content area
- Theme-aware styling

### ModalFooter.tsx
- Footer section for actions
- Flexible button layout

## Usage Pattern

```tsx
import { Modal, ModalHeader, ModalContent, ModalFooter } from './index';

<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  theme="themeName"
  size="md"
  closeOnOverlayClick
  closeOnEsc
  centered
>
  <div className="theme-specific-wrapper">
    <ModalHeader theme="themeName" onClose={() => setIsOpen(false)}>
      <h2>Title</h2>
    </ModalHeader>

    <ModalContent theme="themeName">
      <p>Content</p>
    </ModalContent>

    <ModalFooter theme="themeName">
      <button>Action</button>
    </ModalFooter>
  </div>
</Modal>
```

## Architecture Benefits

1. **Elimination of code duplication**: One Modal component vs 20+ copies
2. **Composability**: Mix and match header/content/footer as needed
3. **Theme agnostic**: Works with any theme, styles applied at usage level
4. **Portal rendering**: Renders at document.body for proper z-index
5. **Accessibility**: Proper ARIA attributes, keyboard support, focus management

## File Structure

- `Modal.tsx` - Core modal container
- `ModalHeader.tsx` - Header component
- `ModalContent.tsx` - Content component
- `ModalFooter.tsx` - Footer component
- `Modal.types.ts` - TypeScript types
- `index.ts` - Public exports
- `*-001.tsx` - Theme demonstration files

## Demonstration Files

Each `{theme}-001.tsx` file demonstrates the Modal system with specific theme styling.
These are for showcase purposes and maintain their original visual designs.
