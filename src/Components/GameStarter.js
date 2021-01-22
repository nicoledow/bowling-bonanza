import React, { useState } from "react";
import { Button } from "@material-ui/core";

import GameForm from './GameForm';

export default function GameStarter(props) {
  const [displayForm, updateDisplayForm] = useState(false);

  if (displayForm) {
    return <GameForm setPlayers={props.setPlayers} beginGame={props.beginGame}/>;
  } else {
    return (
      <div className="centered">
        <Button onClick={e => updateDisplayForm(true)} color="secondary">
          New Game
        </Button>
      </div>
    );
  }
}
