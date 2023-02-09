import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const WeatherItem = ({title,value,unit}) => {
    return (
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemTitle}>{value}{unit}</Text>
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