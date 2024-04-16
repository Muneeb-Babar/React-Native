
import React from 'react';
import { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';

import { View, Button, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import * as Location from 'expo-location';

export default function Map({currentRide}) {

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

    if (!location) {
        return <Text style={{ textAlign: 'center' }}>Allow Location access</Text> || errorMsg
    }

    const { latitude: pickupLat, longitude: pickupLong } = currentRide.pickup.geocodes.main
    const { latitude: destinationLat, longitude: destinationLong } = currentRide.destination.geocodes.main

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: pickupLat,
                    longitude: pickupLong,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                >
                <Marker
                    coordinate={{
                        latitude: pickupLat,
                        longitude: pickupLong
                    }}
                    title='My location'
                // description={marker.description}
                />
                <Marker
                    coordinate={{
                        latitude: destinationLat,
                        longitude: destinationLong
                    }}
                    title='Client location'
                // description={marker.description}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '85%',
    },
});
