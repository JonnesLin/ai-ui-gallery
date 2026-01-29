import { useState } from 'react';
import { TabsContext } from './TabsContext';
import type { TabsProps } from './Tabs.types';
import { cn } from '../_shared/utils';

export function Tabs({
  defaultValue,
  value: controlledValue,
  onChange,
  orientation = 'horizontal',
  className,
  children,
}: TabsProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || '');

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const handleChange = (newValue: string) => {
    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <TabsContext.Provider
      value={{
        value,
        onChange: handleChange,
        orientation,
      }}
    >
      <div
        className={cn(
          orientation === 'vertical' ? 'flex' : 'block',
          className
        )}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}
