import { useState, useEffect } from 'react'
import './App.css'

function Trivia() {
  const [question, setQuestion] = useState([])

  const newQuestion = () => {
        fetch('https://opentdb.com/api.php?amount=1')
        .then(response => response.json())
        .then(resData => setQuestion(resData.results[0]))
        .catch(err => console.error(err))
  }

  useEffect(newQuestion, []);

  if(!question) {
    return <h1>Loading...</h1>
  }

  return (
    <>
        <div
      dangerouslySetInnerHTML={{__html: question.question}}
        />
        <button onClick={newQuestion}>Next question</button>
    </>
  )
}

export default Trivia

