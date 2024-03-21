
import React from 'react'
import { View, Button } from 'react-native'


const Dashboard = ({navigation}) => {
    return (
        <View>
            <Button title='Take a Ride' onPress={()=>{navigation.navigate('Pickup')}}/>
            <Button title='Take Delevery'/>
        </View>
    )
}

export default Dashboard
