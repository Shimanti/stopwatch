import { useState } from "react"

const App = () => {
  const [start, setStart] = useState(0)
  const [stop, setStop] = useState(0)

  const stopwatch = () => {
    if(stop) {
      clearInterval(stop)
      setStop(0)
      return
    }

    const timer = setInterval (() => {
      setStart(prevTime => prevTime + 1)
    }, 1000)

    setStop(timer)
  }

  const reset = () => setStart(0)

  return (
    <main>
      <h1>{start} seconds</h1>
      <button onClick={stopwatch}>
        {stop ? "Stop Timer" : "Start Timer"}
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </main>
  )
}

export default App;
