
import React from 'react'
import { View, Button } from 'react-native'

const Pickup = ({navigation}) => {
    return (
        <View>
            <Button title='Destination' onPress={()=>{navigation.navigate('Destination')}}/>
        </View>
    )
}

export default Pickup
