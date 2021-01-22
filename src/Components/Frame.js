import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

export default function Frame(props) {
  const [try1, setTry1] = useState(0);
  const [try2, setTry2] = useState(0);

  useEffect(() => {
    if (try1 + try2 > 10) {
      alert("A frame's scores cannot add up to more than 10!");
    }
  }, [try1, try2]);

  const handleScore = (event, tryNum) => {
    if (props.round === 10) {
      handleFinalFrameScore(event, tryNum);
      return;
    }

    let score;
    if (event.target.value === "X" || event.target.value === "x") {
      score = event.target.value;
      if (tryNum === 1) {
        document.getElementById(`frame_${props.round}_try2`).disabled = true;
      }
    } else {
      score = parseInt(event.target.value);
    }

    const updatedScores = [...props.scores];
    const idx = props.round * 2 - 2; //equates to the index in the array that this try corresponds to
    updatedScores[idx] = score;

    if (typeof score === "string") {
      score = 10;
    }
    if (tryNum == 1) {
      setTry1(score);
    } else {
      setTry2(score);
    }

    props.setScores(updatedScores);
  };

  const handleFinalFrameScore = (event, tryNum) => {
    function allow3rdTry() {
      const try3Input = document.getElementById("try-3");
      try3Input.removeAttribute("disabled");
    }

    const updatedScores = [...props.scores];
    let score;

    //check if a strike on first shot
    if (
      tryNum === 1 &&
      (event.target.value === "x" ||
        event.target.value === "X" ||
        event.target.value == 10)
    ) {
      allow3rdTry();
      score = 10;
    } else if (tryNum === 2 && props.scores.pop() + props.scores.pop() == 10) {
      //check if spare in first two shots of 10th frame
      allow3rdTry();
      score = parseInt(event.target.value);
    } else {
      score = parseInt(event.target.value);
    }

    updatedScores[props.round * 2 - 2] = score;
    props.setScores(updatedScores);
  };

  if (props.round !== 10) {
    return (
      <Grid container direction="row" spacing={1} className="scoreRow">
        <Grid container item xs={12}>
          <div className="fullWidth centered">Frame {props.round}</div>
        </Grid>
        <Grid container item xs={6}>
          <input
            type="text"
            min="0"
            max="10"
            id={`frame_${props.round}_try1`}
            onChange={(e) => handleScore(e, 1)}
            style={{ width: "75%" }}
          />
        </Grid>
        <Grid container item xs={6}>
          <input
            type="text"
            min="0"
            max="10"
            id={`frame_${props.round}_try2`}
            onChange={(e) => handleScore(e, 2)}
            style={{ width: "75%" }}
          />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container direction="row" spacing={1} className="scoreRow">
        <Grid container item xs={12}>
          <div className="fullWidth centered">Frame {props.round}</div>
        </Grid>
        <Grid container item xs={6}>
          <input
            type="text"
            min="0"
            max="10"
            onChange={(e) => handleScore(e, 1)}
            style={{ width: "75%" }}
          />
        </Grid>
        <Grid container item xs={6}>
          <input
            type="text"
            min="0"
            max="10"
            onChange={(e) => handleScore(e, 2)}
            style={{ width: "75%" }}
          />
        </Grid>
        <Grid container item xs={6}>
          <input
            type="text"
            min="0"
            max="10"
            id="try-3"
            disabled="disabled"
            onChange={(e) => handleScore(e, 3)}
            style={{ width: "75%" }}
          />
        </Grid>
      </Grid>
    );
  }
}
