import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const WeatherItem = () => {
    return (
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>Safi</Text>
            <Text style={styles.weatherItemTitle}>58%</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    weatherItemTitle: {
        color: '#eee',
        fontSize: 14,
        fontWeight: '100'
    },
})

export default WeatherItem