// Nanakshahi months with Gregorian start dates
const NANAKSHAHI_MONTHS = [
  { name: 'ਚੇਤ', startMonth: 2, startDay: 14 }, // Mar 14
  { name: 'ਵੈਸਾਖ', startMonth: 3, startDay: 14 }, // Apr 14
  { name: 'ਜੇਠ', startMonth: 4, startDay: 15 }, // May 15
  { name: 'ਹਾੜ', startMonth: 5, startDay: 15 }, // Jun 15
  { name: 'ਸਾਵਣ', startMonth: 6, startDay: 16 }, // Jul 16
  { name: 'ਭਾਦੋਂ', startMonth: 7, startDay: 16 }, // Aug 16
  { name: 'ਅੱਸੂ', startMonth: 8, startDay: 15 }, // Sep 15
  { name: 'ਕੱਤਕ', startMonth: 9, startDay: 15 }, // Oct 15
  { name: 'ਮੱਘਰ', startMonth: 10, startDay: 14 }, // Nov 14
  { name: 'ਪੋਹ', startMonth: 11, startDay: 14 }, // Dec 14
  { name: 'ਮਾਘ', startMonth: 0, startDay: 13 }, // Jan 13
  { name: 'ਫੱਗਣ', startMonth: 1, startDay: 12 }, // Feb 12
];

export const getPunjabiMonth = date => {
  const year = date.getFullYear();

  //  start dates for this year
  const monthRanges = NANAKSHAHI_MONTHS.map((m, idx) => {
    const start = new Date(year, m.startMonth, m.startDay);
    // next month wraps to next index or next year
    const nextMonth = NANAKSHAHI_MONTHS[(idx + 1) % 12];
    let end = new Date(year, nextMonth.startMonth, nextMonth.startDay);
    if (end <= start) end.setFullYear(year + 1); // wrap to next year
    return { name: m.name, start, end };
  });

  const found = monthRanges.find(m => date >= m.start && date < m.end);
  if (found) return found.name;

  return 'ਫੱਗਣ';
};

export const getTithi = date => {
  const punjabiMonth = getPunjabiMonth(date);
  return `| ${punjabiMonth}`;
};
