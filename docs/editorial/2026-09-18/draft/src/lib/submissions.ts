// An assessment turned in more than once (the Field Journal) carries its dates
// as a `submissions:` list of timestamps. Formatting them in Canberra time keeps
// "Sunday 23:59" a Sunday for a reader anywhere, across the DST change in April.

const dayFormat = new Intl.DateTimeFormat("en-AU", {
  dateStyle: "long",
  timeZone: "Australia/Canberra",
});
const timeFormat = new Intl.DateTimeFormat("en-AU", {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
  timeZone: "Australia/Canberra",
});

export function submissionsOf(data: unknown): Date[] {
  const raw = (data as { submissions?: unknown }).submissions;
  return Array.isArray(raw) ? raw.map((value) => new Date(String(value))) : [];
}

export const formatDueDay = (date: Date): string => dayFormat.format(date);
export const formatDueTime = (date: Date): string => timeFormat.format(date);
