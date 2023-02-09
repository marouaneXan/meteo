import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weathers from './screens/Weathers';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Weather' component={Weathers} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
