import React, { useState } from "react";

import "./App.css";
import AppHeader from "./Components/AppHeader";
import GameScoreRow from "./Containers/GameScoreRow";

function App() {
  return (
    <div class="fullWidth centered">
      <AppHeader />
      <GameScoreRow />
    </div>
  );
}

export default App;
