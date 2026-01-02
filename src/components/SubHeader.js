import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ENGLISH_MONTHS, PUNJABI_MONTHS } from '../utils/months';

export default function SubHeader({ monthIndex, year }) {
  const monthName = ENGLISH_MONTHS[monthIndex];
  const monthType = PUNJABI_MONTHS[monthIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {monthName}, {year} - {monthType}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 6,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: '#333',
  },
});
