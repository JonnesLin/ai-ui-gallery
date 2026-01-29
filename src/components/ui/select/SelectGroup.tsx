import { SelectOption } from './SelectOption';
import type { SelectGroup as SelectGroupType } from './Select.types';
import type { ThemeName } from '../_themes/types';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

interface SelectGroupProps {
  group: SelectGroupType;
  theme: ThemeName;
}

export function SelectGroup({ group, theme }: SelectGroupProps) {
  const themeConfig = getTheme(theme);

  return (
    <div>
      <div
        className={cn(
          'px-4 py-2 text-xs font-semibold uppercase tracking-wider opacity-60',
          themeConfig.base.text
        )}
      >
        {group.label}
      </div>
      {group.options.map((option) => (
        <SelectOption key={option.value} option={option} theme={theme} />
      ))}
    </div>
  );
}
