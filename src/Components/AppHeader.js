import React from "react";
import { Typography } from "@material-ui/core";

export default function AppHeader() {
  return (
    <div class="centered">
      <Typography variant="h1" color="primary">
        Bowling Bonanza
      </Typography>
      <p>Enter the number of pins you knock down on each try. Enter "x" or "X" for a strike.</p>
      <br/>
      <p>An empty input will be considered "0."</p>
      <br/>
    </div>
  );
}
