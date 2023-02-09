import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const WeatherCard = () => {
    const img = { uri: 'http://openweathermap.org/img/wn/10d@2x.png' }
    return (
        <View style={styles.weatherCardContainer}>
            <Image source={img} style={styles.image} />
            <View style={styles.otherContainer}>
                <Text style={styles.day}>Sunday</Text>
                <Text style={styles.temp}>Night - 28&#176;C</Text>
                <Text>Day - 35&#176;C</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150
    },
    weatherCardContainer: {
        flexDirection: 'row',
        backgroundColor: '#00000033',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15
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

export default WeatherCard