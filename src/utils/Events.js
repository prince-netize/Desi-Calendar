// src/utils/calendarHelpers.js
// Punjabi Calendar Events (Purnima, Maasya, Sangrandh)
import { EVENT_COLORS } from './calendarHelpers';

export const ICONS = {
  PURNIMA: require('./images/moon.png'),
  MAASYA: require('./images/venus.png'),
  SANGRANDH: require('./images/sun.png'),
};

export const EVENTS_BY_YEAR = {
  2023: {
    '2023-01-06': [{ id: 'purnima-jan', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2023-01-14': [
      { id: 'sangrandh-jan', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2023-01-21': [{ id: 'maasya-jan', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2023-02-05': [{ id: 'purnima-feb', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2023-02-13': [
      { id: 'sangrandh-feb', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2023-02-19': [{ id: 'maasya-feb', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2023-03-07': [{ id: 'purnima-mar', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2023-03-14': [
      { id: 'sangrandh-mar', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2023-03-21': [{ id: 'maasya-mar', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2023-04-06': [{ id: 'purnima-apr', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2023-04-14': [
      { id: 'sangrandh-apr', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2023-04-19': [{ id: 'maasya-apr', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2023-05-05': [{ id: 'purnima-may', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2023-05-14': [
      { id: 'sangrandh-may', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2023-05-19': [{ id: 'maasya-may', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2023-06-03': [{ id: 'purnima-jun', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2023-06-15': [
      { id: 'sangrandh-jun', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2023-06-17': [{ id: 'maasya-jun', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2023-07-03': [{ id: 'purnima-jul', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2023-07-16': [
      { id: 'sangrandh-jul', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2023-07-17': [{ id: 'maasya-jul', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2023-08-01': [{ id: 'purnima-aug', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2023-08-16': [
      { id: 'sangrandh-aug', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2023-08-30': [{ id: 'maasya-aug', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2023-09-14': [
      { id: 'sangrandh-sep', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2023-09-29': [{ id: 'purnima-sep', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2023-09-28': [{ id: 'maasya-sep', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2023-10-14': [{ id: 'maasya-nov', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2023-10-28': [{ id: 'purnima-oct', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],

    '2023-11-13': [
      { id: 'sangrandh-nov', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2023-11-27': [{ id: 'purnima-nov', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2023-11-26': [{ id: 'maasya-nov', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2023-12-12': [{ id: 'maasya-jan', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2023-12-26': [{ id: 'purnima-dec', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
  },

  2024: {
    '2024-01-10': [{ id: 'maasya-jan', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2024-01-14': [
      { id: 'sangrandh-jan', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2024-01-25': [{ id: 'purnima-jan', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],

    '2024-02-09': [{ id: 'maasya-feb', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2024-02-13': [
      { id: 'sangrandh-feb', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2024-02-24': [{ id: 'purnima-feb', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],

    '2024-03-10': [{ id: 'maasya-mar', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2024-03-14': [
      { id: 'sangrandh-mar', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2024-03-25': [{ id: 'purnima-mar', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],

    '2024-04-08': [{ id: 'maasya-apr', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2024-04-14': [
      { id: 'sangrandh-apr', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2024-04-23': [{ id: 'purnima-apr', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],

    '2024-05-08': [{ id: 'maasya-may', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2024-05-14': [
      { id: 'sangrandh-may', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2024-05-23': [{ id: 'purnima-may', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],

    '2024-06-06': [{ id: 'maasya-jun', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2024-06-14': [
      { id: 'sangrandh-jun', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2024-06-22': [{ id: 'purnima-jun', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],

    '2024-07-05': [{ id: 'maasya-jul', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2024-07-16': [
      { id: 'sangrandh-jul', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2024-07-21': [{ id: 'purnima-jul', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],

    '2024-08-04': [{ id: 'maasya-aug', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2024-08-16': [
      { id: 'sangrandh-aug', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2024-08-19': [{ id: 'purnima-aug', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],

    '2024-09-02': [{ id: 'maasya-sep', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2024-09-16': [
      { id: 'sangrandh-sep', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2024-09-17': [{ id: 'purnima-sep', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],

    '2024-10-02': [{ id: 'maasya-oct', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2024-10-16': [
      { id: 'sangrandh-oct', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2024-10-17': [{ id: 'purnima-oct', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],

    '2024-11-01': [{ id: 'maasya-nov', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2024-11-14': [
      { id: 'sangrandh-nov', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2024-11-15': [{ id: 'purnima-nov', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],

    '2024-12-01': [{ id: 'maasya-dec', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2024-12-14': [
      { id: 'sangrandh-dec', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2024-12-15': [{ id: 'purnima-dec', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
  },

  2025: {
    '2025-01-13': [{ id: 'purnima-jan', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2025-01-14': [
      { id: 'sangrandh-jan', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2025-01-29': [{ id: 'maasya-jan', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2025-02-12': [{ id: 'purnima-feb', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2025-02-13': [
      { id: 'sangrandh-feb', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2025-02-28': [{ id: 'maasya-feb', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2025-03-14': [{ id: 'purnima-mar', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],

    '2025-03-29': [{ id: 'maasya-mar', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2025-04-12': [{ id: 'purnima-apr', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2025-04-14': [
      { id: 'sangrandh-apr', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2025-04-27': [{ id: 'maasya-apr', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2025-05-12': [{ id: 'purnima-may', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2025-05-14': [
      { id: 'sangrandh-may', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2025-05-27': [{ id: 'maasya-may', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2025-06-11': [{ id: 'purnima-jun', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2025-06-14': [
      { id: 'sangrandh-jun', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2025-06-25': [{ id: 'maasya-jun', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2025-07-10': [{ id: 'purnima-jul', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2025-07-16': [
      { id: 'sangrandh-jul', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2025-07-25': [{ id: 'maasya-jul', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2025-08-08': [{ id: 'purnima-aug', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2025-08-16': [
      { id: 'sangrandh-aug', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2025-08-23': [{ id: 'maasya-aug', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2025-09-07': [{ id: 'purnima-sep', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2025-09-16': [
      { id: 'sangrandh-sep', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2025-09-21': [{ id: 'maasya-sep', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2025-10-06': [{ id: 'purnima-oct', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2025-10-16': [
      { id: 'sangrandh-oct', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2025-10-21': [{ id: 'maasya-oct', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2025-11-05': [{ id: 'purnima-nov', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2025-11-14': [
      { id: 'sangrandh-nov', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2025-11-19': [{ id: 'maasya-nov', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2025-12-04': [{ id: 'purnima-dec', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2025-12-14': [
      { id: 'sangrandh-dec', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2025-12-19': [{ id: 'maasya-dec', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
  },

  2026: {
    '2026-01-03': [{ id: 'purnima-jan', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2026-01-14': [
      { id: 'sangrandh-jan', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2026-01-18': [{ id: 'maasya-jan', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2026-02-01': [{ id: 'purnima-feb', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2026-02-12': [
      { id: 'sangrandh-feb', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2026-02-17': [{ id: 'maasya-feb', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2026-03-03': [{ id: 'purnima-mar', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2026-03-14': [
      { id: 'sangrandh-mar', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2026-03-19': [{ id: 'maasya-mar', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2026-04-02': [{ id: 'purnima-apr', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2026-04-14': [
      { id: 'sangrandh-apr', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2026-04-17': [{ id: 'maasya-apr', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2026-05-01': [{ id: 'purnima-may', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2026-05-15': [
      { id: 'sangrandh-may', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2026-05-16': [{ id: 'maasya-may', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2026-06-29': [{ id: 'purnima-jun', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2026-06-15': [
      { id: 'sangrandh-jun', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    // '2026-06-15': [{ id: 'maasya-jun', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    // '2026-07-01': [{ id: 'purnima-jul', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2026-07-16': [
      { id: 'sangrandh-jul', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2026-07-14': [{ id: 'maasya-jul', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],

    '2026-07-29': [{ id: 'purnima-aug', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2026-08-12': [{ id: 'maasya-aug', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2026-08-17': [
      { id: 'sangrandh-aug', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],

    '2026-08-28': [{ id: 'purnima-sep', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2026-09-11': [{ id: 'maasya-sep', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2026-09-17': [
      { id: 'sangrandh-sep', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],

    '2026-09-26': [{ id: 'purnima-oct', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2026-10-10': [{ id: 'maasya-oct', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2026-10-17': [
      { id: 'sangrandh-oct', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],

    '2026-10-26': [{ id: 'purnima-nov', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2026-11-09': [{ id: 'maasya-nov', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2026-11-16': [
      { id: 'sangrandh-nov', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],

    '2026-11-24': [{ id: 'purnima-dec', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
    '2026-12-08': [{ id: 'maasya-dec', titlePa: 'ਮੱਸਿਆ', type: 'MAASYA' }],
    '2026-12-16': [
      { id: 'sangrandh-dec', titlePa: 'ਸੰਗਰਾਂਦ', type: 'SANGRANDH' },
    ],
    '2026-12-23': [{ id: 'purnima-nov', titlePa: 'ਪੁੰਨਿਆ', type: 'PURNIMA' }],
  },
};

export const getEventsForDate = dataKey => {
  const year = Number(dataKey.slice(0, 4));
  const events = EVENTS_BY_YEAR[year]?.[dataKey] || [];

  return events.map(event => ({
    ...event,
    date: dataKey,
    icon: ICONS[event.type],
    color: EVENT_COLORS[event.type],
  }));
};
