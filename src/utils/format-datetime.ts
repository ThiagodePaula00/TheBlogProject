import { format, formatDistanceToNow as dateFnsformatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cacheLife, cacheTag } from "next/cache";

export function formatDatetime(rawDate: string): string {
    const date = new Date(rawDate);

    return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
        locale: ptBR,
    });
}

export function formatDistanceToNow(rawDate: string): string {
    const date = new Date(rawDate);

    return dateFnsformatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true,
    });
}

export function formatHour(timestampMs: number): string {
  const date = new Date(timestampMs);

  return format(date, 'HH:mm:ss', {
    locale: ptBR,
  });
}

export function formatCurrentHour(): string {
  return formatHour(Date.now());
}

export async function formatHourCached() {
  'use cache'
  cacheLife('seconds');
  cacheTag('formatHourCached')

  return formatHour(Date.now());
}