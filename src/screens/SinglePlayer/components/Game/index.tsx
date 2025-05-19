import React, {useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';

import * as S from './styles';
import Icon from '../../../../icons';
import {Icons} from '../../../../icons/types';
import {Props} from './types';
import {theme} from '../../../../styles/theme';

export default function Game({pointGame, gameStatus, gameOption}: Props) {
  const screenWidth = Dimensions.get('window').width - 112;
  const squareSize = screenWidth / 3;
  const iconSize = squareSize * (5 / 8);

  const disabledGame = gameStatus !== 'your_turn';

  const [items, setItems] = useState(
    Array.from({length: 9}, (_, index) => ({
      id: index + 1,
      active: null,
    })),
  );

  const handleSelectOption = (index: number) => {
    const newItem = [...items];

    newItem[index].active = gameOption;
    setItems(newItem);
    pointGame();
  };

  return (
    <S.Wrapper>
      {items.map((item, index) => {
        const {active} = item;

        return (
          <TouchableOpacity
            disabled={disabledGame}
            key={index}
            onPress={() => handleSelectOption(index)}>
            <S.Square key={index} width={squareSize} disabled={!active}>
              {item.active && (
                <Icon
                  name={item.active as Icons}
                  size={iconSize}
                  color={theme.colors.gray[100]}
                />
              )}
            </S.Square>
          </TouchableOpacity>
        );
      })}
    </S.Wrapper>
  );
}
