/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Home from '../screens/Home';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CircleButton from '../components/CircleButton';
import {View} from 'react-native';
import {theme} from '../styles/theme';
import {useTranslation} from 'react-i18next';
import SinglePlayer from '../screens/SinglePlayer';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeRightButton = () => (
  <View style={{marginLeft: 84}}>
    <CircleButton icon="settings" />
  </View>
);

const AppNavigator = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: t('screen.home.title'),
          headerTitleStyle: {
            color: theme.colors.gray[300],
          },
          headerStyle: {
            backgroundColor: '#22272C',
          },
          headerShadowVisible: false,
          headerRight: HomeRightButton,
        }}
      />

      <Stack.Screen
        name="SinglePlayer"
        component={SinglePlayer}
        options={{
          title: t('screen.home.title'),
          headerTitleStyle: {
            color: theme.colors.gray[300],
          },
          headerStyle: {
            backgroundColor: '#22272C',
          },
          headerShadowVisible: false,
          // headerRight: HomeRightButton,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
