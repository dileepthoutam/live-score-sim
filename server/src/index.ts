import WebSocket from "ws";

const wss = new WebSocket.Server({ port: 8080 })

const names: string[] = [
    "dileep",
    "thoutam",
    "dileep",
    "thoutam",
    "dileep",
    "thoutam",
    "dileep",
    "thoutam",
]

wss.on('connection', (ws: WebSocket) => {
    console.log('new client connected')

    ws.on('message', (message: string) => {
        console.log(`received message: ${message}`)
    })

    ws.on('open', () => {
        for (let name of names) {
            ws.send(name)
        }
    })

    ws.on('close', () => {
        console.log(`client disconnected`)
        
    })
})

