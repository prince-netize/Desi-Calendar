/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

export default function DayCell({ day, current, isToday, tithi, onPress }) {
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
          backgroundColor: '#F6F6F6',
          width: '110%',
          borderRadius: 1,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: current ? 1 : 0.35,
          borderWidth: isToday ? 2 : 0,
          borderColor: isToday ? colors.primary : 'transparent',
        }}
      >
        {/* Day Number */}
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: current ? '#000' : '#888',
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
              color: '#555',
            }}
          >
            {tithi}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}
