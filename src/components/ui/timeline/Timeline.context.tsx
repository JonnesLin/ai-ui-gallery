import { createContext, useContext } from 'react';
import type { TimelineContextValue } from './Timeline.types';

const TimelineContext = createContext<TimelineContextValue | null>(null);

export const TimelineProvider = TimelineContext.Provider;

export function useTimelineContext(): TimelineContextValue {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error('Timeline compound components must be used within a Timeline component');
  }
  return context;
}
