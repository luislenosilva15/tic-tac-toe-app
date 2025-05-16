import React from 'react';
import {TouchableOpacity} from 'react-native';

import * as S from './styles';
import Icon from '../../icons';

const CircleButton = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <S.Wrapper>
        <Icon name="settings" size={20} />
      </S.Wrapper>
    </TouchableOpacity>
  );
};

export default CircleButton;
