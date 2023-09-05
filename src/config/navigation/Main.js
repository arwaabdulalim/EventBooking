import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from '../../screens/signUp/SignUp';
import Login from '../../screens/Login/Login';

import colors from '../../themes/colors';
import EventDetails from '../../screens/eventDetails/EventDetails';
import Dashboard from '../../screens/Dashboard/Dashboard';
import Home from '../../screens/home/Home';
import HomeTabNavigator from './HomeTabNav';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTransparent: true,
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
