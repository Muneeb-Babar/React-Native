
import React from 'react'
import { View, Button } from 'react-native'

const Destination = ({navigation}) => {
    return (
        <View>
            <Button title='Car Selection' onPress={()=>{navigation.navigate('CarSelection')}}/>
        </View>
    )
}

export default Destination
