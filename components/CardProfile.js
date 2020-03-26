import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function CardProfile(props) {
  
  const {name, specialist, image, totalReview, rate} = props.profile;
  const ratings = [];
  for(let i = 0; i < rate; i++) {
    ratings.push(<FontAwesome name="star" size={16} color="#f1c40f" key={i} />)
  }

  return (
    <View style={styles.container}>
      <Image 
        style={styles.profileImage}
        source={image}
      />
      <View>
        <Text style={styles.doctorName}>Dr { name }</Text>
        <Text style={styles.doctorSpecialist}>{ specialist }</Text>
        <View style={styles.rating}>
          { ratings }
          <Text style={{marginLeft: 5}}>({ totalReview })</Text>
        </View>
        
      </View>
      <View>
        <FontAwesome name="bookmark-o" size={20} style={styles.bookmark} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Open</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 10,
    marginVertical: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 15
  },
  doctorName: {
    fontFamily: 'montserrat-bold'
  },
  doctorSpecialist: {
    fontFamily: 'montserrat-semibold',
    color: '#bdc3c7',
    fontSize: 12
  },
  rating: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#DAEFF9',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 10
  },
  buttonText: {
    color: '#2ed573',
    fontFamily: 'montserrat-semibold',
    fontSize: 12,
  },
  bookmark: {
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#f1f2f6',
    borderRadius: 3
  }

})
