import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";

import Frame from "../Components/Frame";

export default function GameScoreRow(props) {
  return (
    <Grid container direction="row" className="largeMarginBottom">
      <Grid container item xs={1}>
        {props.player}
      </Grid>
      {[...Array(10).keys()].map((idx) => {
        return (
          <Grid container item xs={1}>
            <Frame
              round={idx + 1}
              player={props.player}
              playerNum={props.playerNum}
              totals={props.totals}
              setTotals={props.setTotals}
              key={`round_${idx}`}
            />
          </Grid>
        );
      })}
      <Grid container item xs={1} />
      <Grid container item xs={12}>
        <div className="fullWidth centered">
          <Typography variant="h6" justify="center">
            Total: {props.totals[props.playerNum]}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
