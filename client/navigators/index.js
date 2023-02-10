import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Weathers from '../screens/Weathers';
import RegisterPage from '../screens/Register';
const Stack = createNativeStackNavigator();
const RootStack=()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Register' component={RegisterPage} options={{ headerShown: false }}  />
                <Stack.Screen name='Weather' component={Weathers} options={{ headerShown: false }}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack