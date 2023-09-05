import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../screens/home/Home';
import Dashboard from '../../screens/Dashboard/Dashboard';
import EventDetails from '../../screens/eventDetails/EventDetails';
import colors from '../../themes/colors';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          headerTitle: 'Home',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home"
              size={30}
              color={colors.primary}
            />
          ),
        }}
      />

      <Tab.Screen
        name={'Dashboard'}
        component={Dashboard}
        options={{
          headerTitle: 'Dashboard',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account"
              size={30}
              color={colors.light}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
