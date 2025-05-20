import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';

export type InGameStatus = 'cross' | 'circle';

export type GameStatus =
  | 'win'
  | 'lose'
  | 'your_turn'
  | 'opponent_turn'
  | 'draw';

export type SinglePlayerScreenRouteProp = RouteProp<
  RootStackParamList,
  'SinglePlayer'
>;
