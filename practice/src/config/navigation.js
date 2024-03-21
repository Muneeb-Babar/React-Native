import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chat from '../views/chat'
import Status from '../views/Status';
import Calls from '../views/Calls';
import AddStatus from '../views/Showstatus';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="WhatsApp" component={TabNavigator} />
                <Stack.Screen name="AddStatus" component={AddStatus} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Status" component={Status} />
            <Tab.Screen name="Calls" component={Calls} />
        </Tab.Navigator>
    );
}

export default Navigation;