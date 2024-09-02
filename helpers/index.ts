export function textCutter(text: string, length: number) {
  return text.length > length ? text.substring(0, length) + '...' : text;
}

export function formatDate(date: Date) {
  if (!(date instanceof Date)) {
    throw new TypeError('The argument must be a Date object.');
  }

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

export function timeCounter(date: Date): string {
  const now: Date = new Date();
  const secondsElapsed: number = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];

  const result = intervals
    .map(({ label, seconds }) => ({
      label,
      count: Math.floor(secondsElapsed / seconds),
    }))
    .find(({ count }) => count > 0);

  const label = result?.label || 'second';
  const count = result?.count || 0;

  return count === 0
    ? 'Just now'
    : `${count} ${label}${count !== 1 ? 's' : ''} ago`;
}