type Player = 'circle' | 'cross' | null;

interface BoardCell {
  id: number;
  active: Player;
}

export function botPlay(
  board: BoardCell[],
  bot: Player = 'cross',
  opponent: Player = 'circle',
): number | undefined {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function isWinning(board: BoardCell[], player: Player): boolean {
    return lines.some(
      ([a, b, c]) =>
        board[a].active === player &&
        board[b].active === player &&
        board[c].active === player,
    );
  }

  function findBestMove(): number | undefined {
    const moves: {index: number; score: number}[] = [];

    for (let i = 0; i < 9; i++) {
      if (board[i].active !== null) {
        continue;
      }

      const simulatedWinBoard = [...board];
      simulatedWinBoard[i] = {...simulatedWinBoard[i], active: bot};
      if (isWinning(simulatedWinBoard, bot)) {
        return i;
      }

      const simulatedBlockBoard = [...board];
      simulatedBlockBoard[i] = {...simulatedBlockBoard[i], active: opponent};
      if (isWinning(simulatedBlockBoard, opponent)) {
        moves.push({index: i, score: 90});
        continue;
      }

      let score = 50;
      if (i === 4) {
        score = 80;
      } else if ([0, 2, 6, 8].includes(i)) {
        score = 70;
      } else {
        score = 60;
      }

      moves.push({index: i, score});
    }

    if (moves.length > 0) {
      moves.sort((a, b) => b.score - a.score);
      return moves[0].index;
    }

    return undefined;
  }

  return findBestMove();
}

export const getInitialGame = () =>
  Array.from({length: 9}, (_, index) => ({
    id: index + 1,
    active: null,
  }));

export const updateGame = (
  items: any[],
  index: number,
  option: 'circle' | 'cross',
) => {
  items[index].active = option;

  return items;
};
