import './App.css'
import DisplayScore from './DisplayScore'
import GetFeed from './GetFeed'

function App() {
  return (
    <>
      <h1 className="d-flex justify-content-center p-5">Live Score</h1>

      <DisplayScore/>
      <GetFeed/>
    </>
  )
}

export default App
