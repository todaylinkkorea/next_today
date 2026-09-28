const KST_CLOCK_FORMAT = new Intl.DateTimeFormat('ko-KR', {
  timeZone: 'Asia/Seoul',
  hour12: false,
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

export function formatKst(date: Date): string {
  return `KST ${KST_CLOCK_FORMAT.format(date)}`;
}

export const KST_PLACEHOLDER = 'KST 실시간 연결중...';
