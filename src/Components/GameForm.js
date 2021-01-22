import React, { useState } from "react";


export default function GameForm(props) {

  const [player1Name, setPlayer1] = useState(null);
  const [player2Name, setPlayer2] = useState(null);

  const handleSubmit = () => {
      if (!player1Name || !player2Name) {
          alert('Please enter player names before proceeding!');
          return;
      }
      props.setPlayers([player1Name, player2Name]);
      props.beginGame(true);
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Player 1 Name:
            <input type="text" value={player1Name} onChange={e => setPlayer1(e.target.value)} style={{margin: '1rem'}}/>
        </label>
        <br/>
        <label>
            Player 2 Name:
            <input type="text" value={player2Name} onChange={e => setPlayer2(e.target.value)} style={{margin: '1rem'}}/>
        </label>
        <br/>
      <button type="submit">Begin!</button>
    </form>
  );
}
