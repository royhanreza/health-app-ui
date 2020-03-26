import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function SearchBox() {
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} />
      <TextInput placeholder="Search" style={styles.textInput} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f1f2f6',
    borderRadius: 5,
    marginVertical: 20,
  },
  icon: {

  },
  textInput: {
    fontSize: 16,
    marginLeft: 10
  }
})
