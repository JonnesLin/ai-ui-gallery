import { Stats } from './Stats';
import type { StatItemData } from './types';

export default function GradientStats() {
  const stats: StatItemData[] = [
    { value: '10K+', label: 'Active Users' },
    { value: '50M+', label: 'Downloads' },
    { value: '4.9', label: 'Rating' },
    { value: '99.9%', label: 'Uptime' },
  ];

  return <Stats theme="gradient" layout="grid" columns={4} items={stats} />;
}
