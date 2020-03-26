import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import SearchBox from '../components/SearchBox'
import RoundedButton from '../components/RoundedButton'
import CardMenu from '../components/CardMenu'
import CardProfile from '../components/CardProfile'

export default function Home() {

  const [menus, setMenus] = useState([
    {id: 0, icon: 'stethoscope', text: 'General\nPractitioner', bg: '#ff6b81'},
    {id: 1, icon: 'tooth-outline', text: 'Dental\nSurgeon', bg: '#FFC312'},
    {id: 2, icon: 'doctor', text: 'Covid\nEmergency', bg: '#C4E538'},
  ])

  const [profiles, setProfiles] = useState([
    {id: 0, name: 'Ivan Smith', specialist: 'Dentist', rate: 4, totalReview: 320, image: require('../assets/profile.jpg')},
    {id: 1, name: 'Royhan Reza', specialist: 'Dentist', rate: 5, totalReview: 320, image: require('../assets/profile.jpg')},
    {id: 2, name: 'Faisal', specialist: 'Dentist', rate: 4, totalReview: 320, image: require('../assets/profile.jpg')},
  ])

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{paddingTop: 40, paddingBottom: 20, paddingHorizontal: 20}}>
        <Feather name="menu" size={24} color="#000" />
        <View style={styles.profileContainer}>
          <View>
            <Text style={styles.textGreeting}>Hello,</Text>
            <Text style={styles.textName}>Royhan</Text>
          </View>
          <View>
            <Image 
              style={styles.profileImage}
              source={require('../assets/profile.jpg')}
            />
          </View>
        </View>
        <SearchBox />
        <View style={styles.bannerContainer}>
          <Text style={styles.textBanner}>Do you have symptoms{"\n"}of covid 19?</Text>
          <RoundedButton align="flex-start" />
        </View>
        <Text style={styles.textCategories}>Categories</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            menus.map(menu => (
              <CardMenu key={menu.id}>
                <MaterialCommunityIcons name={menu.icon} size={24} color="#fff" style={{...styles.cardMenuIcon, backgroundColor: menu.bg}} />
                <Text style={{marginLeft: 10, fontFamily: 'montserrat-semibold', fontSize: 12}}>{menu.text}</Text>
              </CardMenu>
            ))
          }
        </ScrollView>
        <View style={{padding: 20, borderRadius: 20, backgroundColor: '#f1f2f6', marginTop: 20}}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'montserrat-bold'}}>Top doctors</Text>
            <Text style={{fontFamily: 'montserrat-bold', fontSize: 12, color: 'gray'}}>See all</Text>
          </View>
          {
            profiles.map(profile => (
              <CardProfile profile={{...profile}} key={profile.id} />
            ))
          }
        </View>
        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 15
  },  
  textGreeting: {
    fontFamily: 'montserrat-regular',
    fontSize: 24,
    color: 'gray',
  },
  textName: {
    fontFamily: 'montserrat-bold',
    fontSize: 24,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  bannerContainer: {
    backgroundColor: '#c7ecee',
    padding: 20,
    borderRadius: 5,
  },
  textBanner: {
    fontFamily: 'montserrat-bold'
  },
  textCategories: {
    fontFamily: 'montserrat-bold',
    fontSize: 16,
    marginVertical: 20
  },
  cardMenuIcon: {
    backgroundColor: '#ff6b81', 
    padding: 10, 
    borderRadius: 10
  }
})
