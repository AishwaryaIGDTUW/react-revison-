import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let Counter = 15

  let [Counter,setCounter] = useState(15)

  const addValue = () => {
    Counter += 1
    if( Counter > 20) {
      Counter = 20
    }
    setCounter(Counter)
    console.log('Counter value:', Counter)
  }
  const decrementValue = () => {
    Counter -= 1
    if (Counter < 0) {
      Counter = 0
    }
    setCounter(Counter)
    console.log('Counter value:', Counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {Counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={decrementValue}>Decrement value</button>
    </>
  )
}

export default App
