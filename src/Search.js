import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { EvilIcons } from '@expo/vector-icons';

const Search = ({fetchWeatherData}) => {
    const [cityName, setCityName] = useState('');
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder='Search City'
    value={cityName}
    onChangeText={(text) => setCityName(text)}
    style={{fontSize: 16, color: 'blue'}}
      />
      <EvilIcons name='search' size={28} color='black'
        onPress={() => fetchWeatherData(cityName)}
      />
    </View>
  )
}

export default Search;
const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width -20,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 25,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        backgroundColor: 'lightgrey',
    }
})