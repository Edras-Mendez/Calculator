import React from 'react';
import './App.css';
import freeCodeCamp_logo from './imgs/Logo.png';
import Button from './components/button.jsx';
import Display from './components/Display.jsx';
import ClearButton from './components/clearButton.jsx';
import {useState} from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addClick = (val) => {
    setInput(input + val);
  }

  const result = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Enter a number in the calculator');
    }
  }

  return (
    <div className="App">
      <div className="logo__container">
        <img 
          className='freeCodeCamp'
          src={freeCodeCamp_logo} 
          alt="Logo" />
      </div>
      <div className="main__container">
        <Display input={input}/>
        <div className="buttons__row">
          <Button handleClick={addClick}>1</Button>
          <Button handleClick={addClick}>2</Button>
          <Button handleClick={addClick}>3</Button>
          <Button handleClick={addClick}>+</Button>
        </div>
        <div className="buttons__row">
          <Button handleClick={addClick}>4</Button>
          <Button handleClick={addClick}>5</Button>
          <Button handleClick={addClick}>6</Button>
          <Button handleClick={addClick}>-</Button>
        </div>
        <div className="buttons__row">
          <Button handleClick={addClick}>7</Button>
          <Button handleClick={addClick}>8</Button>
          <Button handleClick={addClick}>9</Button>
          <Button handleClick={addClick}>*</Button>
        </div>
        <div className="buttons__row">
          <Button handleClick={result}>=</Button>
          <Button handleClick={addClick}>0</Button>
          <Button handleClick={addClick}>.</Button>
          <Button handleClick={addClick}>/</Button>
        </div>
        <div className="buttons__row">
          <ClearButton handleClear={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
 );
}

export default App;
