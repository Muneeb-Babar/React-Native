
import React from 'react'
import { View, Button } from 'react-native'

const CarSelection = ({navigation}) => {
    return (
        <View>
            <Button title='Dashboard' onPress={()=>{navigation.navigate('Dashboard')}}/>
        </View>
    )
}

export default CarSelection
