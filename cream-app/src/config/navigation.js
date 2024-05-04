import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  Ionicons from 'react-native-vector-icons/Ionicons'

import Dashboard from '../screen/Dashboard';
import Pickup from '../screen/Pickup';
import Destination from '../screen/Destination';
import CarSelection from '../screen/Carselection';
import RideHistory from '../screen/rideHistory';
import RideHistoryDetail from '../screen/rideHistoryDetail';
import Status from '../screen/Status';
import Splash from '../screen/Splash';
import Profile from '../screen/Profile';
import Message from '../screen/Message';
import Setting from '../screen/Setting';
import Custondrawer from '../components/Custondrawer';


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
                <Stack.Screen name="Pickup" component={Pickup} />
                <Stack.Screen name="Destination" component={Destination} />
                <Stack.Screen name="RideSelection" component={CarSelection} />
                <Stack.Screen name="RideHistoryDetail" component={RideHistoryDetail} />
                <Stack.Screen name="Status" component={Status} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={props=> <Custondrawer {...props}/>} 
        screenOptions={{drawerActiveBackgroundColor:'green',drawerActiveTintColor:'white',drawerInactiveTintColor:'#333',
        drawerLabelStyle:{marginLeft:-22,fontSize:15}}}
        >
            <Drawer.Screen name="Dashboard" component={Dashboard} options={{drawerIcon:({color})=>(
                <Ionicons name='home-outline' size={22} color={color}/>
            )}}/>
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