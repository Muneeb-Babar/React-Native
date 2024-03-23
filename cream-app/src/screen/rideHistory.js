import React from 'react'
import { View, Button } from 'react-native'


const RideHistory = ({navigation}) => {
    return (
        <View>
            <Button title='Ride History Detail' onPress={()=>{navigation.navigate('RideHistoryDetail')}}/>
        </View>
    )
}

export default RideHistory