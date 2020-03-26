import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ButtonIcon(props) {
  return (
    <View style={{...styles.button, backgroundColor: props.color}}>
      <MaterialCommunityIcons name={props.name} size={24} color="#fff" style={styles.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 10
  },
  icon: {
    alignSelf: 'center'
  }
})
