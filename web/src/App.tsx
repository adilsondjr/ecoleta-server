import React, {useState} from 'react';
import './App.css';
import Header from './Header'

// JSX: Sintaxe de XML dentro do JavScript
function App() {

  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <Header title="Hello Wortd!"/>

      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
