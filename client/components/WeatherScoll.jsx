import { StyleSheet, ScrollView, View, Text } from 'react-native'
import React from 'react'
import WeatherCard from './WeatherCard'
import FutureForcast from './FutureForcast'

const WeatherScoll = ({ data }) => {
    return (
        <ScrollView horizontal={true} style={styles.scrollView}>
            {data?.length > 0 ? (
                <>
                    <WeatherCard data={data[0]} />
                    <FutureForcast data={data} />
                </>
            ) : (
                <View>
                    <Text>Loading...</Text>
                </View>
            )}
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