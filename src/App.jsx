import { useState } from 'react'
import './App.css'
import Type from './components/type';
import {types, start} from "./consts/types"

function App() {
  const [buttonText, setButtonText] = useState(types[0]);
  const [startText, setStartText] = useState(start[0]);

  const changeType = () => {
    if (buttonText == types[0]) {
      setButtonText(types[1]);
    } else {
      setButtonText(types[0])
    }
  };

  const changeStart = () => {
    if (startText == start[0]) {
      setStartText(start[1]);
    } else {
      setStartText(start[0])
    }
  };

  return (
    <>
      <Type changeType={changeType} type={buttonText} changeStart={changeStart} start={startText}/>
    </>
  )
}

export default App
