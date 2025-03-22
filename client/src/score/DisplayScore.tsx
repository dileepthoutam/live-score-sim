import {ScoreInterface} from "./ScoreInterface.ts";

export default function DisplayScore(props: ScoreInterface) {
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
