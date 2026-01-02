/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image } from 'react-native';
import { EVENT_COLORS } from '../utils/calendarHelpers';
import { EVENTS_BY_YEAR, ICONS } from '../utils/Events';
import { ENGLISH_MONTHS } from '../utils/months';
import colors from '../styles/colors';

export default function CalendarEventsBar({ year, month }) {
  const monthNamePa = ENGLISH_MONTHS[month];
  const monthKey = String(month + 1).padStart(2, '0');

  const events = Object.entries(EVENTS_BY_YEAR[year] || {})
    .filter(([dateKey]) => dateKey.startsWith(`${year}-${monthKey}`))
    .flatMap(([dateKey, list]) =>
      list.map(event => ({
        ...event,
        day: Number(dateKey.slice(8, 10)),
        icon: ICONS[event.type],
        color: EVENT_COLORS[event.type],
      })),
    );

  if (!events.length) return null;

  return (
    <View
      style={{
        marginTop: 12,
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: '#DDD',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      {events.map(event => (
        <View
          key={event.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            source={event.icon}
            style={{ width: 18, height: 18, marginRight: 6 }}
            resizeMode="contain"
          />
          <View
            style={{
              width: 1,
              height: 40,
              backgroundColor: '#DDD',
              marginRight: 8,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '500',
                color: colors.Ename,
              }}
            >
              {event.titlePa}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: colors.weekColor,
              }}
            >
              {event.day} {monthNamePa}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
