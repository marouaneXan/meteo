import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weathers from './screens/Weathers';
import AuthContextProvider from './context/auth';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name='Weather' component={Weathers} options={{ headerShown: false }}  /> */}
          <Stack.Screen name='Register' component={Register} options={{ headerShown: false }}  />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
