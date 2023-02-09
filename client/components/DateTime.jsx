import { View, Text,StyleSheet } from 'react-native'
import React,{useEffect,useState} from 'react'
import WeatherItem from './WeatherItem'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DateTime = () => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    useEffect (() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes();
            const ampm = hour >=12 ? 'pm' : 'am'
        
            setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm) 
        
            setDate(days[day] + ', ' + date+ ' ' + months[month]) 
        
        }, 1000);
    }, [])
  return (
    <View style={styles.container}>
        <View>
            <View>
                <Text style={styles.heading}>{time}</Text>
            </View>
            <View>
                <Text style={styles.subHeading}>{date}</Text>
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