import "./App.css";
import { Board } from "./components/board.component";
import React from "react";
import { useState } from "react";

const players = ["X", "O"];

export const App = () => {
  const [winner, setWinner] = useState(null);

  return (
    <div className="App">
      {winner ? ( // winner !== null | undefined | '' | false | 0
        <h1>Winner is {winner}</h1>
      ) : (
        <Board onWinner={(winner) => setWinner(winner)} players={players} />
      )}
    </div>
  );
};

export default App;
