import React from 'react';
import {TouchableOpacity} from 'react-native';

import * as S from './styles';
import {Props} from './types';

export default function Button({value, onPress, disabled}: Props) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <S.Wrapper disabled={disabled}>
        <S.Text>{value}</S.Text>
      </S.Wrapper>
    </TouchableOpacity>
  );
}
