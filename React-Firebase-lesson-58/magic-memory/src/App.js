import './App.css'
import { useState } from 'react'
import singleCard from './Components/SingleCard'
const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]

function App() {
  

  //shuffle card
  const shuffleCards = () => {
    const  shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) =>({...card, id:Math.random()}))
    setCards(shuffleCards)
    setTurns(0)
  }
 console.log(cards, turns)
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        
        </div>
    </div>
  );
}

export default App