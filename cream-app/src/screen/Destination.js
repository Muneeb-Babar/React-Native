
import { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';

import { View, Button, StyleSheet, Text ,TouchableOpacity } from 'react-native'
import * as Location from 'expo-location'

const Destination = ({navigation}) => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    console.log(location)

    if (!location) {
        return <Text style={{textAlign:'center'}}>Allow Location access</Text> || errorMsg
    }
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0009,
                    longitudeDelta: 0.0009,
                }}>
                <Marker
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude
                    }}
                    title='My location'
                    // description={marker.description}
                />
            </MapView>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => { navigation.navigate('CarSelection') }}>
                <Text style={styles.buttonText}>Car Selection</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '80%',
    },
    buttonContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 10,
        width: '90%',
        alignItems: 'center',
        marginTop:30,
    },
    button1: {
        backgroundColor: 'green',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default Destination
