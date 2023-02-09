import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const FutureForcast = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <FutureForcastItem />
      <FutureForcastItem />
      <FutureForcastItem />
      <FutureForcastItem />
    </View>
  )
}

const FutureForcastItem = () => {
  const img = { uri: 'http://openweathermap.org/img/wn/10d@2x.png' }
  return (
    <View style={styles.FutureForcastItemContainer}>
      <Text style={styles.day}>Sunday</Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.temp}>Night - 28&#176;C</Text>
      <Text>Day - 35&#176;C</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  },
  FutureForcastItemContainer: {
    flex: 1,
    backgroundColor: '#00000033',
    justifyContent: 'center',
    padding: 20,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 10
  },
  day: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#3c3c44',
    padding: 10,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: '200',
    marginBottom: 15
  },
  temp: {
    fontSize: 16,
    color: 'white',
    fontWeight: '100',
    textAlign: 'center'
  },
  otherContainer: {
    paddingRight: 40
  }
})

export default FutureForcast