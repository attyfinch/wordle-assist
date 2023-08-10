import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

/*
  1. Initial Form Values
  2. State to manage the changes
  3. Yup form validation
  4. Form errors

  Component for form
  Component for words
*/

// const url = process.env.API
// const local = process.env.LOCAL

const initialFilterValues = {
  positions: ['_', '_', '_', '_', '_'],
  include: ['_', '_', '_', '_', '_'],
  exclude: "",
  char1Exclude: "",
  char2Exclude: "",
  char3Exclude: "",
  char4Exclude: "",
  char5Exclude: ""
}

function App() {
  const [word, setWord] = useState('')

  axios.get()
  .then((res) => {
    setWord(res.data.word)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {word}
        </p>
      </header>
    </div>
  );
}

export default App;
