import {ScoreInterface} from "./ScoreInterface.ts";
import DisplayScore from "./DisplayScore.tsx";

export default function EvaluateScore() {

    const score: ScoreInterface = {
        totalRuns: 234,
        wickets: 2,
        striker: "Virat Kohli",
        nonStriker: "Rohit Sharma",
        runsOfStriker: 89,
        runsOfNonStriker: 43,
        teamA: "India",
        teamB: "Australia",
        bowler: "Pat Cummins",
        bowlerOvers: 6,
        bowlerWickets: 2,

    }

    return (
        <>
            <DisplayScore {...score}/>
        </>
    )
}
