
import React from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'



const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <View style={styles.main1}>
                <View><TouchableOpacity>
                    <Image
                        width={100}
                        height={80}
                        source={{ uri: 'https://upload-cdn.careem.com/max_van_f9bb9ca049.png' }}
                    />
                    <Text style={styles.textButton}>Car</Text>
                </TouchableOpacity></View>
                <View><TouchableOpacity>
                    <Image
                        width={100}
                        height={80}
                        source={{ uri: 'https://upload-cdn.careem.com/taxi_car_3113f165e9.png' }}
                    />
                    <Text style={styles.textButton}>Hala Taxi</Text>
                </TouchableOpacity></View>
                <View><TouchableOpacity>
                    <Image
                        width={100}
                        height={80}
                        source={{ uri: 'https://upload-cdn.careem.com/cplus_rebranded_6_1989d714eb.png' }}
                    />
                    <Text style={styles.textButton}>Bike</Text>
                </TouchableOpacity></View>
                <View><TouchableOpacity>
                    <Image
                        width={100}
                        height={80}
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5610/5610439.png' }}
                        resizeMode='contain'
                    />
                    <Text style={styles.textButton}>Food</Text>
                </TouchableOpacity></View>
                <View><TouchableOpacity>
                    <Image
                        width={100}
                        height={80}
                        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/008/492/073/original/delivery-cartoon-illustration-png.png' }}
                        resizeMode='contain'
                    />
                    <Text style={styles.textButton}>Delivery</Text>
                </TouchableOpacity></View>
                <View><TouchableOpacity>
                    <Image
                        width={100}
                        height={80}
                        source={{ uri: 'https://upload-cdn.careem.com/cplus_rebranded_7_535b9f51d8.png' }}
                        resizeMode='contain'
                    />
                    <Text style={styles.textButton}>Shop</Text>
                </TouchableOpacity></View>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => { navigation.navigate('Pickup') }}>
                    <Text style={styles.buttonText}>Take a Ride</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.button2]}>
                    <Text style={styles.buttonText}>Take Delivery</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
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
    button2: {
        backgroundColor: 'green',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    main1: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: 18,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 10,
    },
    textButton: {
        position: 'absolute',
        fontSize:18,
        bottom:-18,
    }
});
export default Dashboard
