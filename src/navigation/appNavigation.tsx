import React from 'react';
import Home from '../screens/Home';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type AppStackParamList = {
  Home: undefined;
  Profile: {userId: string};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{title: 'Início'}} />
  </Stack.Navigator>
);

export default AppNavigator;
