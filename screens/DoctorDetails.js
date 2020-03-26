import React from 'react'
import { View, StyleSheet, ImageBackground, Text, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ButtonBack from '../components/ButtonBack'
import ButtonIcon from '../components/ButtonIcon'
import RoundedButtonBlock from '../components/RoundedButtonBlock'

export default function DoctorDetails() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{paddingTop: 24}}>
        <ImageBackground source={require('../assets/banner.jpg')} style={styles.imageBackground}>
          <View style={{padding: 20}}>
            <ButtonBack />
          </View>
        </ImageBackground>
        <View style={styles.profileDetailContainer}>
          <View style={styles.nameContainer}>
            <View>
              <Text style={styles.name}>Dr Royhan Reza</Text>
              <Text style={styles.specialist}>General practitioner</Text>
            </View>
            <View style={styles.inlineContainer}>
              <ButtonIcon color="#f1c40f" name="email" />
              <ButtonIcon color="#2ecc71" name="phone"/>
            </View>
          </View>
          <View style={{...styles.nameContainer, paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,.075)'}}>
            <View style={styles.inlineContainer}>
              <MaterialCommunityIcons name="star" color="orange" size={18} />
              <MaterialCommunityIcons name="star" color="orange" size={18} />
              <MaterialCommunityIcons name="star" color="orange" size={18} />
              <MaterialCommunityIcons name="star" color="orange" size={18} />
              <MaterialCommunityIcons name="star" color="gray" size={18} />
              <Text style={{fontFamily:'montserrat-semibold', color: 'gray', fontSize: 12, marginLeft: 10}}>(1320 reviews)</Text>
            </View>
            <Text style={{fontFamily:'montserrat-semibold', color: '#0abde3', fontSize: 12}}>See all reviews</Text>
          </View>
          <View style={{paddingVertical: 15}}>
            <Text style={styles.textTitle}>About</Text>
            <Text style={styles.textContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dictum nibh, et ultricies massa elementum sed... <Text style={{ color: '#0abde3', fontSize: 12}}>See more</Text> </Text>
          </View>
          <View style={{paddingVertical: 15}}>
            <Text style={styles.textTitle}>Working hours</Text>
            <Text style={styles.textContent}>Mon - Fri 09.00 - 17.00</Text>
          </View>
          <View style={{paddingVertical: 15}}>
            <Text style={styles.textTitle}>Stats</Text>
            <View style={styles.statItemContainer}>
              <View>
                <Text style={styles.statItemNumber}>385</Text>
                <Text style={styles.statItemText}>Patient</Text>
              </View>
              <View>
                <Text style={styles.statItemNumber}>15 years</Text>
                <Text style={styles.statItemText}>Experience</Text>
              </View>
              <View>
                <Text style={styles.statItemNumber}>10</Text>
                <Text style={styles.statItemText}>Certifications</Text>
              </View>
            </View>
          </View>
          <RoundedButtonBlock />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: 200,
  },
  profileDetailContainer: {
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: '#fff',
    marginTop: -30,
    padding: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },  
  name: {
    fontFamily: 'montserrat-bold',
    fontSize: 16
  },
  specialist: {
    fontFamily: 'montserrat-semibold',
    fontSize: 12,
    color: 'gray',
    marginTop: 5
  },
  inlineContainer: {
    flexDirection: 'row', 
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  textTitle: {
    fontFamily: 'montserrat-bold'
  },
  textContent: {
    fontFamily: 'montserrat-semibold',
    fontSize: 12,
    color: 'gray',
    marginTop: 10,
    lineHeight: 18
  },
  statItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  statItemNumber: {
    fontFamily: 'montserrat-bold',
    fontSize: 16,
    textAlign: 'center'
  },
  statItemText: {
    fontFamily: 'montserrat-semibold',
    fontSize: 11,
    color: 'gray',
    textAlign: 'center',
    marginTop: 5
  }
})
