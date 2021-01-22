import React, { useState } from "react";

import "./App.css";
import AppHeader from "./Components/AppHeader";
import GameStarter from "./Components/GameStarter";
import BowlingGameSheet from "./Containers/BowlingGameSheet";

function App() {
  const [gameBegun, beginGame] = useState(false);
  const [players, setPlayers] = useState([]);

  if (gameBegun && players.length > 0) {
    return (
      <div class="centered">
        <AppHeader />
        <BowlingGameSheet players={players}/>
      </div>
    );
  } else {
    return (
      <div class="centered">
        <AppHeader />
        <GameStarter setPlayers={setPlayers} beginGame={beginGame}/>
      </div>
    );
  }
}

export default App;
