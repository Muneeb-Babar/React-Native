
import React from 'react'
import { View, Button,StyleSheet } from 'react-native'


const Dashboard = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title='Take a Ride' onPress={()=>{navigation.navigate('Pickup')}}/>
            <Button title='Take Delevery'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent:'center',
    gap:50
    },
});

export default Dashboard
