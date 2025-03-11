import { useState } from "react";
import { ScoreProps } from "./ScoreProps";

export default function Score(props: ScoreProps) {

  const [totalScore, setTotalScore] = useState(0);
  const [noOfWickets, setNoOfWickets] = useState(0);

  function updateScore() {
    setTotalScore(props.totalScore);
    setNoOfWickets(props.noOfWickets);
  }

  return (
    <div>
      <p>{props.teamA}</p>
      <p>{props.teamB}</p>
      <h1>{totalScore}/{noOfWickets}</h1> 
      <p>14.5</p>

      <button onClick={updateScore}>Refresh</button>
    </div>
  )
}

