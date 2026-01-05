// Gregorian month index: Jan = 0
export const SANGRAND_2026 = [
  { gMonth: 0, gDay: 14, name: 'ਮਾਘ' }, // Jan 14
  { gMonth: 1, gDay: 12, name: 'ਫੱਗਣ' }, // Feb 12
  { gMonth: 2, gDay: 14, name: 'ਚੇਤ' }, // Mar 14
  { gMonth: 3, gDay: 14, name: 'ਵੈਸਾਖ' }, // Apr 14
  { gMonth: 4, gDay: 15, name: 'ਜੇਠ' }, // May 15
  { gMonth: 5, gDay: 15, name: 'ਹਾੜ' }, // Jun 15
  { gMonth: 6, gDay: 16, name: 'ਸਾਵਣ' }, // Jul 16
  { gMonth: 7, gDay: 17, name: 'ਭਾਦੋਂ' }, // Aug 17
  { gMonth: 8, gDay: 17, name: 'ਅੱਸੂ' }, // Sep 17
  { gMonth: 9, gDay: 17, name: 'ਕੱਤਕ' }, // Oct 17
  { gMonth: 10, gDay: 16, name: 'ਮੱਘਰ' }, // Nov 16
  { gMonth: 11, gDay: 16, name: 'ਪੋਹ' }, // Dec 16
];

const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

export const getPunjabiDate = date => {
  const year = date.getFullYear();
  const gMonth = date.getMonth();
  const gDay = date.getDate();

  const currentSangrand = SANGRAND_2026.find(s => s.gMonth === gMonth);

  // BEFORE sangrand → previous Punjabi month
  if (gDay < currentSangrand.gDay) {
    const prevIndex =
      (SANGRAND_2026.findIndex(s => s.gMonth === gMonth) + 11) % 12;

    const prev = SANGRAND_2026[prevIndex];

    const prevMonthDays = daysInMonth(year, prev.gMonth);

    const day = prevMonthDays - (prev.gDay - gDay) + 1;

    return { month: prev.name, day };
  }

  return {
    month: currentSangrand.name,
    day: gDay - currentSangrand.gDay + 1,
  };
};

export const getTithi = date => {
  const { month, day } = getPunjabiDate(date);
  return `${day} ${month}`;
};
