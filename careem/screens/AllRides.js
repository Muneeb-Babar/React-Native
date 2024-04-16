import { View, Button, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { useEffect, useState } from 'react'

import { getRides,updateStatus } from '../config/firebase'
import Map from './Mapup'



const AllRides = ({navigation}) => {

    const [rides, setRides] = useState([])
    const [currentRide, setCurrentRide] = useState()

    useEffect(() => {
        getRides(rides => {
            setRides(rides)
        })
    }, [])

    const accept = async (item) => {
        await updateStatus(item._id, 'accept')
        setCurrentRide(item)
        // navigation && navigation.navigate('Ride location') 
    }

    const reject = async (item) => {
        await updateStatus(item._id, 'reject')
    }

    return (
        <View style={styles.container}>
            {/* <Text style={{ textAlign: 'center', marginTop: 20 }}>rides</Text> */}
            {currentRide ? <Map currentRide={currentRide}/> :
            rides.map(item => {
                return <View style={styles.mainContainer}>
                    <View style={styles.container1} key={item}>
                        <Text>Pickup: {item.pickup.name}, {item.pickup.location.cross_street}</Text>
                        <Text>Destination: {item.destination.name}, {item.destination.location.address}</Text>
                        <Text>Fare: Rs. {item.fare}</Text>
                        <Text>Vehical : {item.carType}</Text>
                    </View>
                    <View style={{ marginTop: 10, marginRight: 5 }}>
                        <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => accept(item)}><Text style={styles.buttonText}>Accept</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => reject(item)}><Text style={styles.buttonText}>Reject</Text></TouchableOpacity>
                    </View>
                </View>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    container1: {
        margin: 10,
        paddingVertical: 8
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    button1: {
        backgroundColor: 'green',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
})


export default AllRides
