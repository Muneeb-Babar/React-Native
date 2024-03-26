import React from 'react'
import { useEffect } from 'react'
import { View, Button,ImageBackground,StyleSheet,Text } from 'react-native'
import * as Animatable from 'react-native-animatable';


const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Main')
        },2000)
    },[])
    return (
        <View style={styles.container}>
        <ImageBackground 
        source={{ uri: 'https://cdn4.arabiccoupon.com/sites/default/files/styles/icon_image/public/store_icon/careem-logo-en-arabiccoupon-careem-coupons-and-promo-codes-400x400.jpg' }}
        resizeMode="contain"
        style={styles.image}
        
    />
    <View >
        <Animatable.Text animation="bounceInDown" style={styles.text}
        duration={2000}>© Design by Muneeb</Animatable.Text>
    </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:'white'
    },
    image: {
    flex: 1,
    justifyContent: 'center',
    },
    text:{
        textAlign:'center',
        fontSize:20,
        marginBottom:14,

    }
})

export default Splash