/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import { View, Animated, PanResponder } from 'react-native';
import Header from '../components/Header';
import MonthYearBar from '../components/MonthYearBar';
import SubHeader from '../components/SubHeader';
import CalendarGrid from '../components/CalendarGrid';
import colors from '../styles/colors';

export default function CalendarScreen() {
  const [month, setMonth] = useState(10);
  const [year, setYear] = useState(2025);
  const translateX = useRef(new Animated.Value(0)).current;

  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: (_, g) => Math.abs(g.dx) > 20,
    onPanResponderRelease: (_, g) => {
      if (g.dx < -80) goNext();
      if (g.dx > 80) goPrev();
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    },
  });

  const goNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear(y => y + 1);
    } else setMonth(m => m + 1);
  };

  const goPrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear(y => y - 1);
    } else setMonth(m => m - 1);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header />
      <MonthYearBar
        month={month}
        year={year}
        onPrev={goPrev}
        onNext={goNext}
        onMonthSelect={setMonth}
        onYearSelect={setYear}
      />

      <View style={{ backgroundColor: colors.primary }} />

      <SubHeader monthIndex={month} year={year} />

      <Animated.View
        {...pan.panHandlers}
        style={{ transform: [{ translateX }] }}
      >
        <CalendarGrid
          year={year}
          month={month}
          onDayPress={day => {
            console.log('Selected day:', day);
          }}
        />
      </Animated.View>
    </View>
  );
}
