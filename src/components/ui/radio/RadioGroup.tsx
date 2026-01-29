import { createContext, useContext, useState } from 'react';
import { cn } from '../_shared/utils';
import type { RadioGroupProps, RadioGroupContext } from './Radio.types';

const RadioGroupContextObj = createContext<RadioGroupContext | null>(null);

export function useRadioGroup() {
  const context = useContext(RadioGroupContextObj);
  if (!context) {
    throw new Error('Radio must be used within RadioGroup');
  }
  return context;
}

export function RadioGroup({
  value: controlledValue,
  defaultValue = '',
  onChange,
  orientation = 'vertical',
  name,
  disabled = false,
  children,
  className,
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const contextValue: RadioGroupContext = {
    name,
    value,
    onChange: handleChange,
    disabled,
  };

  const orientationClass = orientation === 'horizontal' ? 'flex flex-row gap-4' : 'flex flex-col gap-3';

  return (
    <RadioGroupContextObj.Provider value={contextValue}>
      <div className={cn(orientationClass, className)} role="radiogroup">
        {children}
      </div>
    </RadioGroupContextObj.Provider>
  );
}

RadioGroup.displayName = 'RadioGroup';
