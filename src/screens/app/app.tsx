import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useAppState } from './app.state';

export const App = () => {
  const { date, onDateChange } = useAppState();
  return (
    <SafeAreaView>
      <View />
    </SafeAreaView>
  );
};
