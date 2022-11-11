import { useState } from "react";
import { winner } from "../functions/winner.fn";
import { Square } from "./square.component";

const startTabel = [null, null, null, null, null, null, null, null, null];

export function Board(props) {
  const [turn, setTurn] = useState(props.players[0]);
  const [table, setTable] = useState(startTabel);

  function updateState(id) {
    if (!id && id != 0) return;

    const newTable = [...table];
    newTable[id] = turn;

    const iWinner = winner(newTable);
    if (iWinner) {
      props.onWinner(iWinner);
    }

    setTable(newTable);
  }

  const updatePlayer = (id) => {
    updateState(id);
    const nextPlayer = (players, actualPlayer) =>
      players.find((p) => p !== actualPlayer);

      setTurn((turn) => nextPlayer(props.players, turn));
  };

  const [a, b, c, d, e, f, g, h, i] = table;

  return (
    <div>
      <div className="board-row">
        <Square onClick={updatePlayer} id={0} mark={a}></Square>
        <Square onClick={updatePlayer} id={1} mark={b}></Square>
        <Square onClick={updatePlayer} id={2} mark={c}></Square>
      </div>
      <div className="board-row">
        <Square onClick={updatePlayer} id={3} mark={d}></Square>
        <Square onClick={updatePlayer} id={4} mark={e}></Square>
        <Square onClick={updatePlayer} id={5} mark={f}></Square>
      </div>
      <div className="board-row">
        <Square onClick={updatePlayer} id={6} mark={g}></Square>
        <Square onClick={updatePlayer} id={7} mark={h}></Square>
        <Square onClick={updatePlayer} id={8} mark={i}></Square>
      </div>
    </div>
  );
}
