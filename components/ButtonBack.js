import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function ButtonBack() {
  return (
    <View style={styles.button}>
      <AntDesign name="arrowleft" size={24} color="#fff" style={{alignSelf: 'center'}} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5
  }
})

