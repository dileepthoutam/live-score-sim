import './App.css'
import Score from './score/Score'
import { ScoreProps } from './score/ScoreProps'

function App() {

  const score: ScoreProps = {
    totalScore: 240,
    noOfWickets: 3,
    teamA: "Chennai Super Kings",
    teamB: "Royal Challengers Bengaluru",
  }

  return (
    <div>
      <h1>Live Score</h1>
      <Score {...score}/>
    </div>
  )
}

export default App
