import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './src/navigation/BottomTab';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
      <NavigationContainer>
        <BottomTab/>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({});

export default App;
