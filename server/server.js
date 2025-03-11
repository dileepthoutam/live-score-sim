"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const wss = new ws_1.default.Server({ port: 8080 });
const scores = [
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
wss.on('connection', (ws) => {
    console.log('new client connected');
    setTimeout(() => {
        console.log("sending data over socket to UI");
    }, 3000);
    for (let score of scores) {
        ws.send(JSON.stringify(score));
    }
    ws.on('close', () => {
        console.log('client disconnected');
    });
});
