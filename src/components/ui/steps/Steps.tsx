import { Children, cloneElement, isValidElement, useRef } from 'react';
import type { StepsProps, StepStatus, StepItemInternal, StepProps } from './types';
import { Step } from './Step';
import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';

export function Steps({
  current,
  theme = 'minimalist',
  direction = 'horizontal',
  size = 'md',
  labelPlacement = 'vertical',
  progressDot = false,
  onChange,
  children,
  className,
}: StepsProps) {
  const themeConfig = getTheme(theme);
  const stepsRef = useRef<HTMLDivElement>(null);

  const items = Children.toArray(children).filter(isValidElement);
  const totalSteps = items.length;

  const getActualStatus = (index: number, itemStatus?: StepStatus): StepStatus => {
    if (itemStatus) {
      return itemStatus;
    }

    if (index < current) {
      return 'finish';
    }
    if (index === current) {
      return 'process';
    }
    return 'wait';
  };

  const handleStepClick = (index: number) => {
    if (onChange) {
      onChange(index);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!onChange) return;

    if (direction === 'horizontal') {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (current > 0) {
          onChange(current - 1);
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (current < totalSteps - 1) {
          onChange(current + 1);
        }
      }
    } else {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (current > 0) {
          onChange(current - 1);
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (current < totalSteps - 1) {
          onChange(current + 1);
        }
      }
    }

    if (e.key === 'Home') {
      e.preventDefault();
      onChange(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      onChange(totalSteps - 1);
    }
  };

  const containerClasses = cn(
    'w-full',
    direction === 'horizontal' && 'flex items-start',
    direction === 'vertical' && 'flex flex-col',
    className
  );

  return (
    <div
      ref={stepsRef}
      className={containerClasses}
      onKeyDown={handleKeyDown}
      role="group"
      aria-label="Progress steps"
      tabIndex={onChange ? 0 : undefined}
    >
      {items.map((child, index) => {
        if (!isValidElement(child)) {
          return null;
        }

        const childProps = child.props as StepProps;
        const actualStatus = getActualStatus(index, childProps.status);
        const isLast = index === totalSteps - 1;
        const isCurrent = index === current;

        const stepProps: StepItemInternal = {
          ...childProps,
          index,
          isLast,
          actualStatus,
          direction,
          size,
          labelPlacement,
          progressDot,
          theme,
          onClick: onChange ? () => handleStepClick(index) : undefined,
        };

        return <Step key={index} {...stepProps} aria-current={isCurrent ? 'step' : undefined} />;
      })}
    </div>
  );
}

Steps.Step = Step;
