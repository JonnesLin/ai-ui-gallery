import { Spinner } from './Spinner';

export default function GlassmorphismSpinner() {
  return (
    <div className="flex items-center gap-6 p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
      <Spinner size="sm" theme="glassmorphism" color="white" />
      <Spinner size="md" theme="glassmorphism" color="white" />
      <Spinner size="lg" theme="glassmorphism" color="white" />
    </div>
  );
}
