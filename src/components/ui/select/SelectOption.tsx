import { useSelectContext } from './Select';
import type { SelectOption as SelectOptionType } from './Select.types';
import type { ThemeName } from '../_themes/types';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

interface SelectOptionProps {
  option: SelectOptionType;
  theme: ThemeName;
}

export function SelectOption({ option, theme }: SelectOptionProps) {
  const { value, multiple, selectOption } = useSelectContext();
  const themeConfig = getTheme(theme);

  const isSelected = multiple
    ? (Array.isArray(value) ? value.includes(option.value) : false)
    : value === option.value;

  const handleClick = () => {
    if (!option.disabled) {
      selectOption(option.value);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={option.disabled}
      className={cn(
        'w-full px-4 py-2.5 text-left flex items-center justify-between gap-3',
        'transition-all duration-200',
        themeConfig.base.text,
        option.disabled
          ? themeConfig.states.disabled
          : themeConfig.states.hover,
        isSelected && 'font-medium'
      )}
    >
      {multiple && (
        <span
          className={cn(
            'flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center transition-all',
            isSelected
              ? 'bg-current border-current'
              : 'border-current border-opacity-30'
          )}
        >
          {isSelected && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </span>
      )}

      <span className="flex-1">{option.label}</span>

      {!multiple && isSelected && (
        <svg
          className="w-4 h-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </button>
  );
}
