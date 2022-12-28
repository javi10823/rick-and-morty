import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details} from '../screens/Details';
import {Home} from '../screens/Home';
import {DETAILS_SCREEN, HOME_SCREEN} from './screens';

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={DETAILS_SCREEN}
        component={Details}
        options={{
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
