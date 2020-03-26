import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function RoundedButton(props) {
  return (
    <View style={{...styles.container, alignSelf: props.align}}>
      <Text style={styles.text}>Contact a doctor</Text>
    </View>
    
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
    fontFamily: 'montserrat-semibold'
  },
})
