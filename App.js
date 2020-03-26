import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo';
import Home from './screens/Home';
import DoctorDetails from './screens/DoctorDetails';

const loadFont = () => Font.loadAsync({
  'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
})

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if( fontsLoaded ) {
    return (
      // <Home />
      <DoctorDetails />
    )
  } else {
    return (
      <AppLoading 
        startAsync={loadFont}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'montserrat-semibold'
  }
});
