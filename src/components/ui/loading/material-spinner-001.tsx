import { Spinner } from './Spinner';

export default function MaterialSpinner() {
  return (
    <div className="flex items-center gap-6 p-6">
      <Spinner size="sm" theme="material" />
      <Spinner size="md" theme="material" />
      <Spinner size="lg" theme="material" />
    </div>
  );
}
