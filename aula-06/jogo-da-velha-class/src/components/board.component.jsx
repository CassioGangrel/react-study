import React from "react";
import { winner } from "../functions/winner.fn";
import { Square } from "./square.component";

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: props.players[0],
      table: [null, null, null, null, null, null, null, null, null],
    };
  }

  updateState(id) {
    if (!id && id != 0) return;
    
    const table = [...this.state.table];
    table[id] = this.state.turn;

    const iWinner = winner(table);
    if (iWinner) {
      this.props.onWinner(iWinner);
    }

    this.setState({ table });
  }

  updatePlayer = (id) => {
    this.updateState(id);

    const nextPlayer = (players, actualPlayer) =>
      players.find((p) => p !== actualPlayer);

    this.setState(({ turn }) => ({
      turn: nextPlayer(this.props.players, turn),
    }));
  };

  render() {
    const [a, b, c, d, e, f, g, h, i] = this.state.table;
    return (
      <div>
        <div className="board-row">
          <Square onClick={this.updatePlayer} id={0} mark={a}></Square>
          <Square onClick={this.updatePlayer} id={1} mark={b}></Square>
          <Square onClick={this.updatePlayer} id={2} mark={c}></Square>
        </div>
        <div className="board-row">
          <Square onClick={this.updatePlayer} id={3} mark={d}></Square>
          <Square onClick={this.updatePlayer} id={4} mark={e}></Square>
          <Square onClick={this.updatePlayer} id={5} mark={f}></Square>
        </div>
        <div className="board-row">
          <Square onClick={this.updatePlayer} id={6} mark={g}></Square>
          <Square onClick={this.updatePlayer} id={7} mark={h}></Square>
          <Square onClick={this.updatePlayer} id={8} mark={i}></Square>
        </div>
      </div>
    );
  }
}
