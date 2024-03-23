
import { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';

import { View, Button, StyleSheet, Text } from 'react-native'
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
        return <Text>Allow Location access</Text> || errorMsg
    }
    return (
        <View>
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
            <Button title='Car Selection' onPress={()=>{navigation.navigate('CarSelection')}}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '90%',
    },
});

export default Destination
