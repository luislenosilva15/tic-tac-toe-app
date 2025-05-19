import {useRoute} from '@react-navigation/native';
import React from 'react';
import {GameStatus, InGameStatus, SinglePlayerScreenRouteProp} from './types';

import * as S from './styles';
import Icon from '../../icons';
import {useTranslation} from 'react-i18next';
import {gameColorState} from '../../helpers/singlePlayer';
import {Icons} from '../../icons/types';
import Game from './components/Game';

export default function SinglePlayer() {
  const route = useRoute<SinglePlayerScreenRouteProp>();

  const [gameStatus, setGameStatus] = React.useState<GameStatus>('your_turn');

  const {gameOption: currentGameOption} = route.params;

  const {t} = useTranslation();

  const handlePointGame = () => {
    setGameStatus('opponent_turn');
  };

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.HeaderGameOptionWrapper>
          <Icon
            name={currentGameOption as Icons}
            size={56}
            color={gameColorState('left', gameStatus)}
          />
          <S.HeaderGameOptionText disabled={gameStatus === 'opponent_turn'}>
            {t('screen.single_player_screen.player')}
          </S.HeaderGameOptionText>
        </S.HeaderGameOptionWrapper>

        <S.HeaderDividerText>VS</S.HeaderDividerText>

        <S.HeaderGameOptionWrapper>
          <Icon
            name={currentGameOption === 'cross' ? 'circle' : 'cross'}
            size={56}
            color={gameColorState('right', gameStatus)}
          />
          <S.HeaderGameOptionText disabled={gameStatus === 'your_turn'}>
            {t('screen.single_player_screen.computer')}
          </S.HeaderGameOptionText>
        </S.HeaderGameOptionWrapper>
      </S.HeaderWrapper>

      <Game
        gameOption={currentGameOption as InGameStatus}
        gameStatus={gameStatus}
        pointGame={handlePointGame}
      />
    </S.Wrapper>
  );
}
