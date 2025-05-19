import {GameStatus, InGameStatus} from '../../types';

export type Props = {
  gameStatus: GameStatus;
  gameOption: InGameStatus;
  pointGame: () => void;
};
