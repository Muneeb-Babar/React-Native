import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../screen/Dashboard';
import Pickup from '../screen/Pickup';
import Destination from '../screen/Destination';
import CarSelection from '../screen/Carselection';


const Stack = createNativeStackNavigator();


function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Pickup" component={Pickup} />
                <Stack.Screen name="Destination" component={Destination} />
                <Stack.Screen name="CarSelection" component={CarSelection} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;