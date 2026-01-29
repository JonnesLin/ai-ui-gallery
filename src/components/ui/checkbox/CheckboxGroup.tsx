import { createContext, useContext, useState } from 'react';
import { cn } from '../_shared/utils';
import { Checkbox } from './Checkbox';
import type {
  CheckboxGroupProps,
  CheckboxGroupItemProps,
} from './Checkbox.types';

interface CheckboxGroupContextValue {
  value: string[];
  onChange: (itemValue: string, checked: boolean) => void;
  disabled: boolean;
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);

function useCheckboxGroup() {
  const context = useContext(CheckboxGroupContext);
  if (!context) {
    throw new Error('CheckboxGroup.Item must be used within CheckboxGroup');
  }
  return context;
}

export function CheckboxGroup({
  value = [],
  onChange,
  disabled = false,
  className,
  children,
}: CheckboxGroupProps) {
  const handleChange = (itemValue: string, checked: boolean) => {
    const newValue = checked
      ? [...value, itemValue]
      : value.filter((v) => v !== itemValue);
    onChange?.(newValue);
  };

  return (
    <CheckboxGroupContext.Provider
      value={{
        value,
        onChange: handleChange,
        disabled,
      }}
    >
      <div className={cn('flex flex-col gap-4', className)}>{children}</div>
    </CheckboxGroupContext.Provider>
  );
}

function CheckboxGroupItem({
  value,
  label,
  description,
  disabled: itemDisabled,
  className,
  boxClassName,
  labelClassName,
  descriptionClassName,
  renderIcon,
  renderIndeterminate,
}: CheckboxGroupItemProps) {
  const { value: groupValue, onChange, disabled: groupDisabled } = useCheckboxGroup();

  const checked = groupValue.includes(value);
  const disabled = groupDisabled || itemDisabled;

  const handleChange = (newChecked: boolean) => {
    onChange(value, newChecked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      disabled={disabled}
      label={label}
      description={description}
      className={className}
      boxClassName={boxClassName}
      labelClassName={labelClassName}
      descriptionClassName={descriptionClassName}
      renderIcon={renderIcon}
      renderIndeterminate={renderIndeterminate}
    />
  );
}

CheckboxGroup.Item = CheckboxGroupItem;
