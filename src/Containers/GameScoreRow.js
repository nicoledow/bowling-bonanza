import React, { useState } from "react";
import { Grid } from "@material-ui/core";

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
            <Frame round={idx + 1} player={props.player} />
          </Grid>
        );
      })}
      <Grid container item xs={1}>
        Total
      </Grid>
    </Grid>
  );

}
