"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const wss = new ws_1.default.Server({ port: 8080 });
const names = [
    "dileep",
    "thoutam",
    "dileep",
    "thoutam",
    "dileep",
    "thoutam",
    "dileep",
    "thoutam",
];
wss.on('connection', (ws) => {
    console.log('new client connected');
    ws.on('message', (message) => {
        console.log(`received message: ${message}`);
    });
    ws.on('open', () => {
        for (let name of names) {
            ws.send(name);
        }
    });
    ws.on('close', () => {
        console.log(`client disconnected`);
    });
});
