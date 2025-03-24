import DisplayScore from "./DisplayScore"

const URL = "ws://localhost:3000/ws/feed"

export default function GetFeed() {

  const ws = new WebSocket(URL);

  ws.onopen = () => {
    console.log('server connected.')
  }

  ws.onmessage = (event) => {
    console.log(event.data)
    
  }

  return (
    <>
      <DisplayScore />
    </>
  )
}

