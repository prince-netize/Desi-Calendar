/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import { View, Animated, PanResponder, StyleSheet } from 'react-native';
import Header from '../components/Header';
import MonthYearBar from '../components/MonthYearBar';
import SubHeader from '../components/SubHeader';
import CalendarGrid from '../components/CalendarGrid';
import EventModal from '../components/EventModal';
import { getEventsForDate } from '../utils/Events';
import { BlurView } from '@react-native-community/blur';

export default function CalendarScreen() {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);

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
      setSelectedEvents(events);
      setModalVisible(true);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ marginVertical: 10 }}>
        <Header />
      </View>

      {modalVisible && (
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      )}
      <View style={{ marginVertical: 10 }}>
        <MonthYearBar
          month={month}
          year={year}
          onPrev={goPrev}
          onNext={goNext}
          onMonthSelect={setMonth}
          onYearSelect={setYear}
        />
      </View>
      {modalVisible && (
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      )}

      <View style={{ paddingHorizontal: 10 }}>
        <View style={{ marginVertical: 10, alignItems: 'center' }}>
          <SubHeader monthIndex={month} year={year} />
        </View>

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
          events={selectedEvents}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </View>
  );
}
