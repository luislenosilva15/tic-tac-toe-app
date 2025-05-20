import {useEffect} from 'react';
import {botPlay} from '../../helpers/game';

function useBotPlay(
  gameStatus: string,
  items: any[],
  gamePlayer: any,
  oponentGameOption: any,
  handleSelectOption: (point: number, option: any, nextStatus: string) => void,
) {
  useEffect(() => {
    if (gameStatus === 'opponent_turn') {
      const randomDelay = Math.floor(Math.random() * (1500 - 300 + 1)) + 1000;

      const timer = setTimeout(() => {
        const point = botPlay(items, gamePlayer, oponentGameOption);
        handleSelectOption(point as number, oponentGameOption, 'your_turn');
      }, randomDelay);

      return () => clearTimeout(timer);
    }
  }, [gameStatus, items, gamePlayer, oponentGameOption, handleSelectOption]);
}

export default useBotPlay;
