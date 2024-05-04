import { Image, ImageBackground, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Custondrawer = (props) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'white'}}>
                <ImageBackground style={{padding:8}} source={{uri:'https://media.istockphoto.com/id/981825650/vector/line-pattern-technology-background.jpg?s=612x612&w=0&k=20&c=ymqQL7Ee4_RNqBsQuZR5wxx4BEkSeDfZ3AlPXflYwwE='}}>
                <Image style={{width:80,height:70,marginBottom:5}} source={{uri:'https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png'}}/>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Text style={{ color: 'white', fontSize: 18, marginLeft: 10, marginBottom: 5 }}>Muneeb Babar</Text>
                        <FontAwesome5 name='coins' size={14} color='white' />
                    </View>
                </ImageBackground>
                <View style={{backgroundColor:'#fff',flex:1,paddingTop:10}}>
                <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            <View style={{padding:15,borderTopWidth:1,borderTopColor:'#ccc'}}>
            <TouchableOpacity style={{ paddingVertical: 15 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8
                    }}>
                        <Text style={{
                            fontSize: 16,
                            marginLeft: 5
                        }}>Tell a friends</Text>
                        <Ionicons name='share-social-outline' size={22} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: 15 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8
                    }}>
                        <Text style={{
                            fontSize: 16,
                            marginLeft: 5
                        }}>Sign Out</Text>
                        <Ionicons name='exit-outline' size={22} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Custondrawer

const styles = StyleSheet.create({})