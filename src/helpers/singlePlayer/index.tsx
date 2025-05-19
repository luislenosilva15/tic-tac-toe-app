import {GameStatus} from '../../screens/SinglePlayer/types';
import {theme} from '../../styles/theme';

export const gameColorState = (
  position: 'right' | 'left',
  gameStatus: GameStatus,
) => {
  if (gameStatus === 'your_turn') {
    if (position === 'left') {
      return theme.colors.info.default;
    } else {
      return theme.colors.gray[700];
    }
  }

  if (gameStatus === 'opponent_turn') {
    if (position === 'left') {
      return theme.colors.gray[700];
    } else {
      return theme.colors.info.default;
    }
  }
};
