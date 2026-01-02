export const getTithi = date => {
  // Tithi calculation
  const refNewMoon = new Date('2024-01-11');
  const diff = (date - refNewMoon) / (1000 * 60 * 60 * 24);
  const lunarDay = Math.floor(diff % 30);

  let tithi = '';

  // Punjabi month 1:1 per Gregorian month
  const PUNJABI_MONTHS = [
    'ਮਘ', // Jan
    'ਫਗਵਾਨ', // Feb
    'ਚੇਤ', // Mar
    'ਵੈਸਾਖ', // Apr
    'ਜੇਠ', // May
    'ਹਾੜ', // Jun
    'ਸਾਵਣ', // Jul
    'ਭਾਦੋਂ', // Aug
    'ਅੱਸੂ', // Sep
    'ਕੱਤਕ', // Oct
    'ਮੱਘਰ', // Nov
    'ਪੋਹ', // Dec
  ];

  const punjabiMonth = PUNJABI_MONTHS[date.getMonth()];

  return `${tithi} | ${punjabiMonth}`;
};
