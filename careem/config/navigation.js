import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  Ionicons from 'react-native-vector-icons/Ionicons'

import Splash from '../screens/Splash'
import Dashboard from '../screens/Dashboard';
import AllRides from '../screens/AllRides';
import Map from '../screens/Mapup';
import Profile from '../screens/Profile';
import Message from '../screens/Message';
import Setting from '../screens/Setting';
import CustomDrawer from '../components/CustomDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Splash} options={{
                headerShown: false
                }}/>
                <Stack.Screen name="Main" component={MyDrawer} options={{
                headerShown: false
                }}/>
                <Stack.Screen name="All Rides" component={AllRides} />
                <Stack.Screen name="Ride location" component={Map} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={props=> <CustomDrawer {...props}/>} screenOptions={{drawerActiveBackgroundColor:'green',
        drawerActiveTintColor:'white',drawerInactiveTintColor:'#333', drawerLabelStyle:{marginLeft:-25,fontSize:15}}}>
            <Drawer.Screen name="Dashboard" component={Dashboard} options={{drawerIcon:({color})=>(
                <Ionicons name='home-outline' size={22} color={color}/>
            )}} />
            <Drawer.Screen name="Profile" component={Profile} options={{drawerIcon:({color})=>(
                <Ionicons name='person-outline' size={22} color={color}/>
            )}} />
            <Drawer.Screen name="Message" component={Message} options={{drawerIcon:({color})=>(
                <Ionicons name='chatbox-ellipses-outline' size={22} color={color}/>
            )}} />
            <Drawer.Screen name="Setting" component={Setting} options={{drawerIcon:({color})=>(
                <Ionicons name='settings-outline' size={22} color={color}/>
            )}} />
        </Drawer.Navigator>
    );
}

export default MainNavigator;