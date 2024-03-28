
import React, { useState } from 'react'
import { View, Button, Image, StyleSheet, Text, TouchableOpacity, } from 'react-native'

const CarSelection = ({ navigation, route }) => {
    const [fare,setFare]=useState(0)
    const { pickup, destination } = route.params
    const fares = {
        car: 160,
        bike: 80,
        rickshaw: 120
    }

    const checkfare = (vehicle) => {
        const baseFare=fares[vehicle]
        const {latitude:pickupLat,longitude:pickupLog}=pickup.geocodes.main
        const {latitude:destinationLat,longitude:destinationLog}=destination.geocodes.main
        const distance=calcCrow(pickupLat,pickupLog,destinationLat,destinationLog)
        const ride=Math.round(distance*baseFare)
        setFare(ride)
        // alert('Rs'+ride)
    }

    function calcCrow(lat1, lon1, lat2, lon2) {
        var R = 6371; // km
        var dLat = toRad(lat2 - lat1);
        var dLon = toRad(lon2 - lon1);
        var lat1 = toRad(lat1);
        var lat2 = toRad(lat2);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    }

    // Converts numeric degrees to radians
    function toRad(Value) {
        return Value * Math.PI / 180;
    }
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <TouchableOpacity onPress={() => checkfare('car')}>
                    <Image source={{ uri: 'https://upload-cdn.careem.com/max_van_f9bb9ca049.png' }}
                        width={100}
                        height={80} />
                    <Text style={styles.text}>Car</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => checkfare('bike')}>
                    <Image source={{ uri: 'https://upload-cdn.careem.com/cplus_rebranded_6_1989d714eb.png' }}
                        width={100}
                        height={80} />
                    <Text style={styles.text}>Bike</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => checkfare('rickshaw')}>
                    <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/035/175/313/non_2x/thailand-car-isolated-on-background-3d-rendering-illustration-free-png.png' }}
                        width={100}
                        height={80} />
                    <Text style={styles.text}>Rickshaw</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imgLocation}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/256/4781/4781517.png' }}
                    width={50}
                    height={50} />
                <Text style={{ fontSize: 16 }}>Pickup Location : {pickup.name},{'\n'} {pickup.location.address}</Text>
            </View>
            <View style={styles.imgLocation}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/256/4781/4781517.png' }}
                    width={50}
                    height={50} />
                <Text style={{ fontSize: 16, textAlign: 'center' }}>Drop Location : {destination.name},{'\n'} {destination.location.address}</Text>
            </View>
            
            <View style={styles.buttonContainer}>
            {fare > 0 && <Text style={{textAlign:'center',fontSize:22}}>{`Your Ride Fare Rs : ${fare}`}</Text>}
            <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => { navigation.navigate('RideSelection',{pickup,destination}) }}>
                <Text style={styles.buttonText}>Book Your Ride</Text>
            </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginTop: 20

    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    },
    imgLocation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginTop: 15,
        paddingLeft: 20
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
    buttonContainer:{
        marginTop:60,
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        gap:20,
    }
});

export default CarSelection
