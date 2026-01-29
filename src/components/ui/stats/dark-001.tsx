import { Stats } from './Stats';
import type { StatItemData } from './types';

export default function DarkStats() {
  const stats: StatItemData[] = [
    { value: '10K+', label: 'Active Users', trend: 'up', trendValue: '+12%' },
    { value: '50M+', label: 'Downloads', trend: 'up', trendValue: '+28%' },
    { value: '4.9', label: 'Rating', trend: 'up', trendValue: '+0.3' },
    { value: '99.9%', label: 'Uptime', trendValue: '0.0%' },
  ];

  return <Stats theme="dark" layout="grid" columns={4} items={stats} />;
}
