import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";

import Frame from "../Components/Frame";

export default function GameScoreRow() {
    const [scores, setScores] = useState(Array(21).fill(0));


  const calculateScore = () => {
      let runningTotal = 0;

      //tally the first 9 frames
      for (let i = 0; i < 17; i++) {
          if (i % 2 !== 0) { continue }

          const try1 = scores[i];
          const try2 = scores[i + 1];

          if (scores[i] === 'x' || scores[i] === 'X') {
              const addition = processStrike(scores, i);
              runningTotal += addition;
              continue;
          } else if (scores[i] + scores[i+1] === 10) {
              const addition = processSpare(scores, (i + 1));
              runningTotal += addition;
              continue;
          } else {
              runningTotal += (try1 + try2);
          }
      }
      
      //add the 10th frame scores
      const frame10Score = scores[18] + scores[19] + scores[20];
      runningTotal += frame10Score;

      alert(`Your final score is ${runningTotal}!`);
  };

  const processStrike = (scores, idx) => {
    let nextFrameShot1 = scores[idx + 2];
    let nextFrameShot2 = scores[idx + 3];

    if (nextFrameShot1 === 'x' || nextFrameShot1 === 'X') {
        nextFrameShot1 = 10;
    }

    const result =  nextFrameShot1 + nextFrameShot2 + 10;
    return result;
  };

  const processSpare = (scores, idx) => {
    const nextTry = scores[idx + 1];
    const result = nextTry + 10;
    return result;
  }

  return (
    <Grid container direction="row" className="largeMarginBottom">

      <Grid container item xs={1} />

      {[...Array(10).keys()].map((idx) => {
        return (
          <Grid container item xs={1}>
            <Frame
              round={idx + 1}
              scores={scores}
              setScores={setScores}
              key={`round_${idx}`}
            />
          </Grid>
        );
      })}

      <Grid container item xs={1} />

      <Grid container item xs={12} style={{marginTop: '3rem'}}>
        <div className="fullWidth centered">
          <Button onClick={calculateScore}>Get Score</Button>
        </div>
      </Grid>

    </Grid>
  );
}
