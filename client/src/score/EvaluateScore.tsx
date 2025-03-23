import { useEffect, useState } from "react"
import { ScoreInterface } from "./ScoreInterface";

export default function EvaluateScore() {

    const [data, setData] = useState<ScoreInterface>();

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:3000/ws/feed");
        socket.onmessage = (event) => {
            try {
                setData(JSON.parse(event.data));
            } catch (error) {
                console.log("error parsing json data: ", error);
            }
        }
    })

    return (
        <>
            <h1 className="flex px-6 py-20 justify-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Live Score
            </h1>

            <div className="flex justify-center text-4xl font-bold">
                {props.totalRuns} - {props.wickets}
            </div>

            <div className="flex py-10 justify-center text-2xl font-bold">
                <div>
                    {props.striker} ({props.runsOfStriker})
                </div>
                <div>
                    {props.nonStriker} ({props.runsOfNonStriker})
                </div>
            </div>

            <div className="flex py-10 justify-center text-2xl font-bold">

            </div>

        </>
    )
}
