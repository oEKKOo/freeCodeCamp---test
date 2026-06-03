const { useState } = React;

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  function calculateWinner(currentSquares) {
    for (let line of winningLines) {
      const [a, b, c] = line;

      if (
        currentSquares[a] &&
        currentSquares[a] === currentSquares[b] &&
        currentSquares[a] === currentSquares[c]
      ) {
        return currentSquares[a];
      }
    }

    return null;
  }

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== "");

  function handleSquareClick(index) {
    if (squares[index] || winner) {
      return;
    }

    const nextSquares = [...squares];
    nextSquares[index] = isXTurn ? "X" : "O";

    setSquares(nextSquares);
    setIsXTurn(!isXTurn);
  }

  function handleReset() {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>

      <div
        className="board"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 80px)",
          gap: "8px",
        }}
      >
        {squares.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleSquareClick(index)}
          >
            {square}
          </button>
        ))}
      </div>

      <p>
        {winner
          ? `Winner: ${winner}`
          : isDraw
          ? "It's a draw!"
          : `Next player: ${isXTurn ? "X" : "O"}`}
      </p>

      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}