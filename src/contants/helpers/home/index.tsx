import {GameOption} from '../../../screens/Home/components/NewGameModal/types';
import {theme} from '../../../styles/theme';

export const currentGameOptionColor = (
  gameOption: GameOption,
  option: GameOption,
): string => {
  if (gameOption === 'none') {
    if (option === 'cross') {
      return theme.colors.gray[600];
    } else {
      return theme.colors.secondary.opaque;
    }
  }

  if (gameOption === option) {
    if (option === 'cross') {
      return theme.colors.gray[100];
    } else {
      return theme.colors.secondary.default;
    }
  }

  return theme.colors.gray[600];
};
