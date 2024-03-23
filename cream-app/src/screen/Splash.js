import React from 'react'
import { useEffect } from 'react'
import { View, Button,ImageBackground,StyleSheet } from 'react-native'
// import * as Animatable from 'react-native-animatable';


const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Main')
        },2000)
    },[])
    return (
        <View style={styles.container}>
        <ImageBackground 
        source={{ uri: 'https://upload-cdn.careem.com/Frame_2609152_1118b50d5b.png' }}
        resizeMode="contain"
        style={styles.image}
    />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:'seagreen'
    },
    image: {
    flex: 1,
    justifyContent: 'center',
    },})

export default Splash