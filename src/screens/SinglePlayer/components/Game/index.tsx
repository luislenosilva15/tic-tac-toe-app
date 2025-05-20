import React, {useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';

import * as S from './styles';
import Icon from '../../../../icons';
import {Icons} from '../../../../icons/types';
import {Props} from './types';
import {theme} from '../../../../styles/theme';
import {getInitialGame, updateGame} from '../../../../helpers/game';
import {GameStatus, InGameStatus} from '../../types';
import useBotPlay from '../../../../hooks/game/useBotPlay';
import useCheckWinner from '../../../../hooks/game/useCheckWinner';
import EndGameModal from '../EndGameModal';

export default function Game({pointGame, gameStatus, gamePlayer}: Props) {
  const screenWidth = Dimensions.get('window').width - 112;
  const squareSize = screenWidth / 3;
  const iconSize = squareSize * (3 / 8);

  const disabledGame = gameStatus !== 'your_turn';

  const oponentGameOption = gamePlayer === 'cross' ? 'circle' : 'cross';

  const [items, setItems] = useState(getInitialGame());
  const [endGameModal, setEndGameModal] = useState(false);

  const handleOpenEndGameModal = () => {
    setTimeout(() => {
      setEndGameModal(true);
    }, 1000);
  };

  const handleSelectOption = (
    index: number,
    option: InGameStatus,
    status: GameStatus,
  ) => {
    const newItems = updateGame(items, index, option);
    setItems(newItems);
    pointGame(status);

    const isEnd = newItems
      .map(item => item.active)
      .every(active => active !== null);
    if (isEnd) {
      pointGame('draw');
      handleOpenEndGameModal();
    }
  };

  useBotPlay(
    gameStatus,
    items,
    gamePlayer,
    oponentGameOption,
    handleSelectOption as any,
  );

  useCheckWinner(items, winner => {
    if (winner === gamePlayer) {
      pointGame('win');
      return pointGame('lose');
    }
    handleOpenEndGameModal();
  });

  return (
    <>
      <S.Wrapper>
        {items.map((item, index) => {
          const {active} = item;

          return (
            <TouchableOpacity
              disabled={disabledGame}
              key={index}
              onPress={() =>
                handleSelectOption(index, gamePlayer, 'opponent_turn')
              }>
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
      <EndGameModal
        isOpen={endGameModal}
        onClose={() => setEndGameModal(false)}
      />
    </>
  );
}
