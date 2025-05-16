import React from 'react';
import Home from '../screens/Home';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CircleButton from '../components/CircleButton';

export type AppStackParamList = {
  Home: undefined;
  Profile: {userId: string};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

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
        headerRight: () => <CircleButton />,
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
