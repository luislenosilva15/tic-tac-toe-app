/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Home from '../screens/Home';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CircleButton from '../components/CircleButton';
import {View} from 'react-native';

export type AppStackParamList = {
  Home: undefined;
  Profile: {userId: string};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const HomeRightButton = () => (
  <View style={{marginLeft: 72}}>
    <CircleButton />
  </View>
);

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerStyle: {
          backgroundColor: '#22272C',
        },
        headerShadowVisible: false,
        headerRight: HomeRightButton,
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
