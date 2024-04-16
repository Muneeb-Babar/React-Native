import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
// import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: 'darkgreen' }}>
                <ImageBackground style={{ padding: 8 }} source={{ uri: 'https://media.istockphoto.com/id/981825650/vector/line-pattern-technology-background.jpg?s=612x612&w=0&k=20&c=ymqQL7Ee4_RNqBsQuZR5wxx4BEkSeDfZ3AlPXflYwwE=' }}>
                    <Image style={{ height: 70, width: 80, marginBottom: 5 }} source={{ uri: 'https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png' }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Roboto-Medium', marginLeft: 10, marginBottom: 5 }}>Muneeb Babar</Text>
                        <FontAwesome5 name='coins' size={14} color='white' />
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity style={{ paddingVertical: 15 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8
                    }}>
                        <Text style={{
                            fontSize: 16,
                            marginLeft: 5
                        }}>Tell a friend</Text>
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

export default CustomDrawer

const styles = StyleSheet.create({})