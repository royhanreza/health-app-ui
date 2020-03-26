import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

export default function CardMenu(props) {
  return (
    <TouchableOpacity style={styles.container}>
      {props.children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderColor: '#f1f2f6',
    borderWidth: 1,
    marginRight: 20,
  }
})
