import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../screen/Dashboard';
import Pickup from '../screen/Pickup';
import Destination from '../screen/Destination';
import CarSelection from '../screen/Carselection';
import RideHistory from '../screen/rideHistory';
import RideHistoryDetail from '../screen/rideHistoryDetail';
import Status from '../screen/Status';
import Splash from '../screen/Splash';


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
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Ride History" component={RideHistory} />
        </Drawer.Navigator>
    );
}

export default MainNavigator;