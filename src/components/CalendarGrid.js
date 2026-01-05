/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import DayCell from './DayCell';
import { generateCalendarGrid } from '../utils/calendarHelpers';
import { getTithi } from '../utils/tithiHelpers';
import colors from '../styles/colors';
import CalendarEventsBar from './CalendarEventsBar';

const WEEKDAYS = ['ਸੋਮ', 'ਮੰਗਲ', 'ਬੁੱਧ', 'ਵੀਰ', 'ਸ਼ੁੱਕਰ', 'ਸ਼ਨੀ', 'ਐਤ'];

export default function CalendarGrid({ year, month, onDayPress }) {
  const grid = generateCalendarGrid(year, month).slice(0, 37);
  const today = new Date();

  return (
    <View>
      <View style={{ flexDirection: 'row', marginBottom: 4 }}>
        {WEEKDAYS.map((day, i) => (
          <View
            key={i}
            style={{
              width: '14.28%',
              alignItems: 'center',
              paddingVertical: 4,
              backgroundColor: '#F6F6F6',
              borderRadius: 1,
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontWeight: '400', color: colors.weekColor }}>
              {day}
            </Text>
          </View>
        ))}
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {grid.map((item, i) => {
          const date = new Date(year, month, item.day);
          const isToday =
            item.current && date.toDateString() === today.toDateString();

          const dateKey = item.current
            ? `${year}-${String(month + 1).padStart(2, '0')}-${String(
                item.day,
              ).padStart(2, '0')}`
            : null;

          return (
            <DayCell
              key={i}
              day={item.day}
              current={item.current}
              isToday={isToday}
              tithi={item.current ? getTithi(date) : ''}
              dateKey={dateKey}
              onPress={() => item.current && onDayPress?.(dateKey)}
            />
          );
        })}
      </View>
      <CalendarEventsBar year={year} month={month} />
    </View>
  );
}
