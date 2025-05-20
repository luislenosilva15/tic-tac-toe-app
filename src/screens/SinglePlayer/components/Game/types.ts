import {GameStatus, InGameStatus} from '../../types';

export type Props = {
  gameStatus: GameStatus;
  gamePlayer: InGameStatus;
  pointGame: (status: GameStatus) => void;
};
