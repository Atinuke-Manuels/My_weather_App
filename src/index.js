import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import React , { useState, useEffect} from 'react'
import Constants  from 'expo-constants'
import WeatherDetails from './WeatherDetails'

const API_KEYS = '0f67d8b91c431435b8cd3ad73a2d6adc'


const Weather = () => {
const [weatherData, setWeatherData] =useState(null);
const [loaded, setLoaded] = useState(false)

//function that will help fetch the weather data
const fetchWeatherData = async (cityName) =>{
try{
    setLoaded(false);
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}`)
    //error 404 means something went wrong while 200 means everything is fine
    if (response.status == 200){
        const data = await response.json();
        setWeatherData(data);
    }
    else{
        setWeatherData(null);
    }
    setLoaded(true);
}catch(error){
    Alert.alert('Error', error.message);
}

}

//fetch data for my city
useEffect(() => {
    fetchWeatherData('Abuja');
}, []);

//if data is not loaded
if(!loaded){
    return(
        <View style={styles.container}>
            <ActivityIndicator size='large' color='red'/>
        </View>
    )   
  }
   else if(weatherData === null){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>City not found</Text>
            </View>
        );
    }




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather App</Text>
      </View>
       <WeatherDetails weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>
    </View>
  )
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFC508',
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#C5D2EF',
    height: 80,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 29,
    fontWeight: 'bold',
  }
});