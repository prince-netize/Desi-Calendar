export const getDaysInMonth = (year, month) => {
  // JS handles month < 0 or > 11 automatically
  return new Date(year, month + 1, 0).getDate();
};

// Monday = 0
export const getFirstWeekday = (year, month) => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday start
};

export const generateCalendarGrid = (year, month) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstWeekday(year, month);

  // Handle previous month correctly
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevMonthYear = month === 0 ? year - 1 : year;
  const prevMonthDays = getDaysInMonth(prevMonthYear, prevMonth);

  const grid = [];

  // Previous month fillers
  for (let i = firstDay - 1; i >= 0; i--) {
    grid.push({ day: prevMonthDays - i, current: false });
  }

  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    grid.push({ day: d, current: true });
  }

  while (grid.length < 42) {
    const nextDay = grid.length - daysInMonth - firstDay + 1;
    grid.push({ day: nextDay, current: false });
  }

  return grid;
};

// ================= COLOR MAP =================
export const EVENT_COLORS = {
  MAASYA: 'rgba(53, 137, 199, 0.1)',
  SANGRANDH: 'rgba(249, 183, 43, 0.1)',
  PURNIMA: 'rgba(255, 92, 118, 0.1)',
};

export const EVENT_TEXT_COLORS = {
  MAASYA: '#3589C7',
  SANGRANDH: '#F9B72B',
  PURNIMA: '#FF5C76',
};
