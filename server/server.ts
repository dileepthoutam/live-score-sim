
import WebSocket from "ws";
import Score from "./score-interface";

const wss = new WebSocket.Server({port: 8080})

const scores: Score[] = [
    {
        totalScore: 200,
        noOfWickets: 2,
        teamA: 'Chennai Super Kings',
        teamB: 'Royal Challengers Bengaluru',
        delivery: 2
    },
    {
        totalScore: 202,
        noOfWickets: 3,
        teamA: 'Chennai Super Kings',
        teamB: 'Royal Challengers Bengaluru',
        delivery: 4
    }
];

wss.on('connection', (ws: WebSocket) => {
    console.log('new client connected')

    setTimeout(() => {
        console.log("sending data over socket to UI")
    }, 3000)

    for (let score of scores) {
        ws.send(JSON.stringify(score));
    }
    
    ws.on('close', () => {
        console.log('client disconnected')
        
    })
})
