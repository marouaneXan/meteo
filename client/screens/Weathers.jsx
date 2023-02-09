import { View, StyleSheet, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import DateTime from '../components/DateTime'
import WeatherScoll from '../components/WeatherScoll'

const API_KEY = '49cc8c821cd2aff9af04c9f98c36eb74';

const Weathers = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((success) => {
            let { latitude, longitude } = success.coords
            fetchDataFromApi(latitude, longitude)
        }, (err) => {
            if (err) fetchDataFromApi('32.2833', '-9.2333')
        })
    }, [])
    const fetchDataFromApi = (latitude, longitude) => {
        if (latitude && longitude) {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
                setData(data)
            })
        }

    }
    console.log(data)
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../images/weather.webp')}>
                <DateTime current={data.current} lat={data.lat} lon={data.lon} timezone={data.timezone} />
                <WeatherScoll />
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    }
})

export default Weathers