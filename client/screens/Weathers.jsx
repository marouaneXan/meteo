import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import DateTime from '../components/DateTime'
import WeatherScoll from '../components/WeatherScoll'

const Weathers = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../images/weather.webp')}>
                <DateTime/>
                <WeatherScoll/>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center'
    }
})

export default Weathers