import {GameOption} from '../screens/Home/components/NewGameModal/types';

export type RootStackParamList = {
  Home: undefined;
  SinglePlayer: {
    gameOption: GameOption;
  };
};
