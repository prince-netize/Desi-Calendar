/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../styles/colors';
import { getEventsForDate } from '../utils/Events';
import { EVENT_TEXT_COLORS } from '../utils/calendarHelpers';

export default function DayCell({
  day,
  current,
  isToday,
  tithi,
  dateKey,
  onPress,
}) {
  const events = dateKey ? getEventsForDate(dateKey) : [];
  const hasEvent = events.length > 0;
  const primaryEvent = hasEvent ? events[0] : null;

  const backgroundColor = isToday
    ? colors.today
    : hasEvent
    ? primaryEvent.color
    : '#F6F6F6';

  // ✅ Dynamic text color
  const textColor = isToday
    ? '#FFFFFF'
    : hasEvent
    ? EVENT_TEXT_COLORS[primaryEvent.type] || '#000'
    : '#000';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!current}
      activeOpacity={0.7}
      style={{
        width: '14.28%',
        aspectRatio: 1,
        padding: 3,
      }}
    >
      <View
        style={{
          flex: 1,
          width: '110%',
          borderRadius: 3,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: current ? 1 : 0.35,
          backgroundColor,
        }}
      >
        {hasEvent && (
          <Image
            source={primaryEvent.icon}
            style={{
              position: 'absolute',
              top: 4,
              right: 4,
              width: 12,
              height: 12,
              opacity: current ? 1 : 0.6,
            }}
            resizeMode="contain"
          />
        )}

        {/* Day number */}
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: textColor,
          }}
        >
          {day}
        </Text>

        {/* Tithi */}
        {tithi ? (
          <Text
            style={{
              fontSize: 10,
              marginTop: 2,
              color: textColor,
              opacity: 0.85,
            }}
          >
            {tithi}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}
