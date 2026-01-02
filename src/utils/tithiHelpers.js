/* eslint-disable no-unused-vars */
export const getTithi = date => {
  // Tithi calculation
  const refNewMoon = new Date('2024-01-11');
  const diff = (date - refNewMoon) / (1000 * 60 * 60 * 24);
  const lunarDay = Math.floor(diff % 30);

  let tithi = '';

  const PUNJABI_MONTHS = [
    'ਮਘ',
    'ਫਗਵਾਨ',
    'ਚੇਤ',
    'ਵੈਸਾਖ',
    'ਜੇਠ',
    'ਹਾੜ',
    'ਸਾਵਣ',
    'ਭਾਦੋਂ',
    'ਅੱਸੂ',
    'ਕੱਤਕ',
    'ਮੱਘਰ',
    'ਪੋਹ',
  ];

  const punjabiMonth = PUNJABI_MONTHS[date.getMonth()];

  return `${tithi} | ${punjabiMonth}`;
};
