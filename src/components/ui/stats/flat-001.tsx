import { Stats } from './Stats';
import type { StatItemData } from './types';

export default function FlatStats() {
  const stats: StatItemData[] = [
    { value: '10K+', label: 'Active Users', icon: '👥' },
    { value: '50M+', label: 'Downloads', icon: '📥' },
    { value: '4.9', label: 'Rating', icon: '⭐' },
    { value: '99.9%', label: 'Uptime', icon: '🚀' },
  ];

  return <Stats theme="flat" layout="grid" columns={4} items={stats} />;
}
