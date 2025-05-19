import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {SinglePlayerScreenRouteProp} from './types';

import * as S from './styles';

export default function SinglePlayer() {
  const route = useRoute<SinglePlayerScreenRouteProp>();

  return (
    <S.Wrapper>
      <Text>Game Option: {route.params.gameOption}</Text>
      <Text>Single Player</Text>
    </S.Wrapper>
  );
}
