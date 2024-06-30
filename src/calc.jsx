import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Calc() {
  const [values, setValues] = useState({number1: 0, number2: 0});
  const [result, setResult] = useState({result: 0});

  const inputChanged = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  }

  return (
    <>
    <p>Result = {result}</p>
      <input name="number1" value={values.number1} onChange={inputChanged} />
      <input name="number2" value={values.number2} onChange={inputChanged} />
      <button onClick={() => setResult(Number(values.number1) + Number(values.number2))}>+</button>
      <button onClick={() => setResult(Number(values.number1) - Number(values.number2))}>-</button>
    </>
  )
}

export default Calc