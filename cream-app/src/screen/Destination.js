import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Destination = ({ navigation, route }) => {
    const { pickup } = route.params;
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [places,setPlaces]=useState([])
    const [destination,setDestination]=useState()

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            // for live location
            Location.watchPositionAsync({
                accuracy: 6,
                distanceInterval: 1,
                timeInterval: 500
            }, (location) => {
                setLocation(location)
            })

            // for Only current location
            // let location = await Location.getCurrentPositionAsync({});
            // setLocation(location);
        })();
    }, []);

    console.log(location)

    if (!location) {
        return <Text style={{ textAlign: 'center' }}>Allow Location access</Text> || errorMsg
    }

    const search = (text) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'fsq3/lReeKv6KsjeNnFikQMsEGTy8geGo3ZjRxERxcY0Gbg='
            }
        };

        const {latitude,longitude}=location.coords

        fetch(`https://api.foursquare.com/v3/places/search?query=${text}&ll=${latitude},${longitude}&radius=5000`, options)
            .then(response => response.json())
            .then(response => setPlaces(response.results))
            .catch(err => console.error(err));
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
            <View style={styles.imgLocation}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/256/4781/4781517.png' }}
                    width={50}
                    height={50}
                />
                <Text style={{ fontSize: 18 }}>Pickup Location: {pickup.name},{pickup.location.address}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => { navigation.navigate('RideSelection', { pickup, destination }) }}>
                    <Text style={styles.buttonText}>Car Selection</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <TextInput style={styles.search} placeholder='Enter any location' onChangeText={search} />
                {places.map(item=>{
                return <TouchableOpacity style={styles.searchContent} onPress={()=>setDestination(item)} >
                    <Text>{item.name},{item.location.address}</Text>
                </TouchableOpacity>
            })}
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
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 10,
        width: '90%',
        alignItems: 'center',
    },
    button1: {
        backgroundColor: 'green',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    imgLocation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        width: '100%',
        textAlign: 'center',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        fontSize: 20,
        borderWidth: .2,
        borderColor: 'black',
        marginTop: 3
    },
    searchContainer: {
        position: 'absolute',
        top: 0,
        width: '100%'
    },
    searchContent: {
        width: '100%',
        backgroundColor: 'white',
        paddingLeft: 25,
        paddingTop: 15,
    }
});

export default Destination;