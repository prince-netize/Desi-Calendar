import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import CalendarScreen from './src/Screens/CalendarScreen';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CalendarScreen />
    </SafeAreaView>
  );
}
