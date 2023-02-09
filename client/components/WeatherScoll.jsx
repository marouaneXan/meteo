import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import WeatherCard from './WeatherCard'
import FutureForcast from './FutureForcast'

const WeatherScoll = () => {
    return (
        <ScrollView horizontal={true} style={styles.scrollView}>
            <WeatherCard />
            <FutureForcast />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    scrollView: {
        flex: 0.4,
        backgroundColor: '#18181bcc',
        padding: 30,
    }
})

export default WeatherScoll