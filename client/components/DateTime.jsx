import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import WeatherItem from './WeatherItem'

const DateTime = () => {
  return (
    <View style={styles.container}>
        <View>
            <View>
                <Text style={styles.heading}>12:30pm</Text>
            </View>
            <View>
                <Text style={styles.subHeading}>Monday, June 7</Text>
            </View>
            <View style={styles.weatherItemContainer}>
                <WeatherItem/>
            </View>
        </View>
        <View style={styles.rightAlign}>
            <Text style={styles.timeZone}>Morocco/Safi</Text>
            <Text style={styles.latLong}>4.22N 50</Text>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1.5,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:15
    },
    heading:{
        fontSize:45,
        color:'white',
        fontWeight:'100',

    },
    subHeading:{
        fontSize:25,
        color:'#eee',
        fontWeight:'300',

    },
    rightAlign:{
        textAlign:'right',
        marginTop:20
    },
    timeZone:{
        fontSize:20,
        color:'white'
    },
    latLong:{
        fontSize:16,
        color:'white',
        fontWeight:'700'
    },
    weatherItemContainer:{
        backgroundColor:'#18181b99',
        borderRadius:10,
        padding:10,
        marginTop:10
    }
})

export default DateTime