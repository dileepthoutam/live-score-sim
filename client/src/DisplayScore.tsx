import { useEffect, useState } from "react";
import { LiveScore } from "./LiveScore";

export default function DisplayScore() {

  const [totalScore, setTotalScore] = useState(0)
  const [score, setScore] = useState<LiveScore>({
    ball: "",
    striker: "",
    nonStriker: "",
    bowler: "",
    runsOffBat: 0,
    extras: 0,
    wicketType: "",
    playerDismissed: "",
  })
  const URL = "ws://localhost:3000/ws/feed"

  useEffect(() => {
    const ws = new WebSocket(URL);

    ws.onopen = () => {
      console.log('server connected.')
    }

    ws.onmessage = (event) => {
      const score: LiveScore = JSON.parse(event.data)
      setTotalScore((prev) => prev + score.runsOffBat)
    }
  })

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-5">
              <div className="card-body">
                <h1 className="card-title">{totalScore}</h1>
                <p className="card-text">Total score</p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4">
            <div className="card p-5">
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">Some content for the second card.</p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4">
            <div className="card p-5">
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">Some content for the third card.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
 
