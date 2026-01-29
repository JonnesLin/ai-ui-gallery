import { Pulse } from './Pulse';

export default function MinimalistPulse() {
  return (
    <div className="flex gap-6 p-6">
      <Pulse size="sm" theme="minimalist" shape="circle" />
      <Pulse size="lg" theme="minimalist" shape="square" />
    </div>
  );
}
