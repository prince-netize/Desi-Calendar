/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import { View, Animated, PanResponder, StyleSheet } from 'react-native';
import Header from '../components/Header';
import MonthYearBar from '../components/MonthYearBar';
import SubHeader from '../components/SubHeader';
import CalendarGrid from '../components/CalendarGrid';
import EventModal from '../components/EventModal';
import { getEventsForDate } from '../utils/Events';
import colors from '../styles/colors';
import { BlurView } from '@react-native-community/blur';

export default function CalendarScreen() {
  const [month, setMonth] = useState(10);
  const [year, setYear] = useState(2025);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

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

  const handleDayPress = dateKey => {
    const events = getEventsForDate(dateKey);
    if (events.length > 0) {
      setSelectedEvent(events[0]);
      setModalVisible(true);
    }
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
      <View style={{ paddingHorizontal: 10 }}>
        <SubHeader monthIndex={month} year={year} />

        <Animated.View
          {...pan.panHandlers}
          style={{ transform: [{ translateX }] }}
        >
          <CalendarGrid year={year} month={month} onDayPress={handleDayPress} />
        </Animated.View>

        {modalVisible && (
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          />
        )}

        <EventModal
          visible={modalVisible}
          event={selectedEvent}
          year={year}
          month={month}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </View>
  );
}
