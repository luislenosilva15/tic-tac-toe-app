import React from 'react';
import {TouchableOpacity} from 'react-native';

import * as S from './styles';
import Icon from '../../icons';
import {Props} from './types';

const CircleButton = ({icon, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <S.Wrapper>
        <Icon name={icon} size={18} />
      </S.Wrapper>
    </TouchableOpacity>
  );
};

export default CircleButton;
