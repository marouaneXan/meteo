import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Weathers from '../screens/Weathers';
import RegisterPage from '../screens/Register';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
const Stack = createNativeStackNavigator();
const RootStack=({navigation})=>{
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const checkAuthorization = async () => {
            const name = await AsyncStorage.getItem('name');
            if (name) {
                setIsAuthorized(true);
            } else {
                navigation.navigate('Register');
            }
        };
        checkAuthorization();
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuthorized ? 
                    <Stack.Screen name='Weather' component={Weathers} options={{ headerShown: false }}  />:
                <>
                    <Stack.Screen name='Register' component={RegisterPage} options={{ headerShown: false }}  />
                </>}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack