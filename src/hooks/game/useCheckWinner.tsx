import {useEffect} from 'react';

type GameSymbol = 'cross' | 'circle';
type Board = {id: number; active: GameSymbol | null}[];

function useCheckWinner(items: Board, onWin: (winner: GameSymbol) => void) {
  useEffect(() => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombinations) {
      const first = items[a].active;
      if (first && items[b].active === first && items[c].active === first) {
        onWin(first);
        break;
      }
    }
  }, [items, onWin]);
}

export default useCheckWinner;
