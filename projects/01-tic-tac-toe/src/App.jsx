import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const board = Array(9).fill(null)

function App() {
 
  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <section className='board'>
        
      </section>
    </main> 
  )
}

export default App
