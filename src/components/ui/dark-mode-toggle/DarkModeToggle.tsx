'use client';

import type { DarkModeToggleProps } from './types';
import { SwitchVariant } from './variants/SwitchVariant';
import { ButtonVariant } from './variants/ButtonVariant';
import { DropdownVariant } from './variants/DropdownVariant';
import { getTheme } from '../_themes';
import { useSystemTheme } from './hooks/useSystemTheme';

export function DarkModeToggle({
  theme,
  mode,
  onChange,
  variant = 'switch',
  size = 'md',
  showLabel = false,
  className,
}: DarkModeToggleProps) {
  const themeConfig = getTheme(theme);
  const systemTheme = useSystemTheme();

  const effectiveMode = mode === 'system' ? systemTheme : mode;

  const variantComponents = {
    switch: SwitchVariant,
    button: ButtonVariant,
    dropdown: DropdownVariant,
  };

  const VariantComponent = variantComponents[variant];

  return (
    <VariantComponent
      theme={themeConfig}
      mode={mode}
      effectiveMode={effectiveMode}
      onChange={onChange}
      size={size}
      showLabel={showLabel}
      className={className}
    />
  );
}
