import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import GameScoreRow from "./GameScoreRow";

export default function BowlingGameSheet(props) {
  const [totals, setTotals] = useState({
    1: 0,
    2: 0,
  });

  return (
    <div className="centered">
      <Grid container direction="row" className="largeMarginBottom">
        <GameScoreRow
          playerNum={1}
          player={props.players[0]}
          totals={totals}
          setTotals={setTotals}
        />
      </Grid>
      <Grid container direction="row" className="largeMarginBottom">
        <GameScoreRow
          playerNum={2}
          player={props.players[1]}
          totals={totals}
          setTotals={setTotals}
        />
      </Grid>
    </div>
  );
}
