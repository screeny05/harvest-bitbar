import { endOfWeek, sub } from 'date-fns';

export function getWeekStartAndEnd(date: Date = new Date()): [Date, Date] {
    const weekEnd = endOfWeek(new Date(), { weekStartsOn: 1 });
    const weekStart = sub(weekEnd, { days: 7 });
    return [weekStart, weekEnd];
}

export function formatHours(hours: number): string {
    return `${Math.floor(hours)}:${(hours % 1 * 60).toString().padStart(2, '0')}`;
}
