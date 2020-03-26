import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default function RoundedButtonBlock() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Make an appointment</Text>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#0abde3',
    borderRadius: 30,
    marginTop: 20,
  },  
  text: {
    color: '#fff',
    fontFamily: 'montserrat-semibold',
    textAlign: 'center'
  },
})
