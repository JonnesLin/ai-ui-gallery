import { Spinner } from './Spinner';

export default function MinimalistSpinner() {
  return (
    <div className="flex items-center gap-6 p-6">
      <Spinner size="sm" theme="minimalist" />
      <Spinner size="md" theme="minimalist" />
      <Spinner size="lg" theme="minimalist" />
    </div>
  );
}
