import { formatCurrentHour } from '@/src/utils/format-datetime';

export const dynamic = 'force-dynamic';

export default async function ExemploPage() {
  const hour = formatCurrentHour();

  return (
    <main className="min-h-150 text-4xl font-bold">
      <div>Hora: {hour}</div>
    </main>
  );
}
