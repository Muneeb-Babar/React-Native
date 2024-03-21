import React from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";

import Camera from '../components/camera'


function AddStatus(){
    return (
        <View style={styles.main}>
            <Camera/>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex:1
        
    },
})
export default AddStatus
