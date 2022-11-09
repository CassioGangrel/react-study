import { Square } from "./components";
import "./App.css";
import { Board } from "./components/board.component";
import React from "react";

const players = ["X", "O"];

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      winner: null,
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.winner ? ( // winner !== null | undefined | '' | false | 0
          <h1>Winner is {this.state.winner}</h1>
        ) : (
          <Board
            onWinner={(winner) => this.setState({ winner })}
            players={players}
          />
        )}
      </div>
    );
  }
}

export default App;
