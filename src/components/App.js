import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

import WordleFilter from './WordleFilter';
import WordsList from './WordsList';

/*
  1. Initial Form Values
  2. State to manage the changes
  3. Yup form validation
  4. Form errors

  Component for form
  Component for words
*/

const url = process.env.REACT_APP_API
const local = process.env.REACT_APP_LOCAL

const initialFilterValues = {
  pos1: "", 
  pos2: "",
  pos3: "",
  pos4: "",
  pos5: "",
  include: "",
  exclude: "",
  char1Exclude: "",
  char2Exclude: "",
  char3Exclude: "",
  char4Exclude: "",
  char5Exclude: ""
};

const initialWordsList = [];

function App() {
  const [filter, setFilter] = useState(initialFilterValues);
  const [wordsList, setWordsList] = useState(initialWordsList);

  const getWords = (wordFilter) => {
    axios.post(url, wordFilter)
      .then((res) => {
        setWordsList(res.data.wordlist)
      })
      .catch((err) => {
        console.log(err.message)
      })
  } 

  const change = (name, value) => {
    // Do form validation here
    setFilter({
      ...filter,
      [name]: value
    })
  }

  const submit = () => {
    const newFilter = {
      positions: [filter.pos1, filter.pos2, filter.pos3, filter.pos4, filter.pos5],
      include: filter.include.padEnd(5, '_').split(''),
      exclude: filter.exclude,
      char1Exclude: filter.char1Exclude,
      char2Exclude: filter.char2Exclude,
      char3Exclude: filter.char3Exclude,
      char4Exclude: filter.char4Exclude,
      char5Exclude: filter.char5Exclude
    };

    for (let i = 0; i <= newFilter.positions.length-1; i++) {
      if (newFilter.positions[i] === "") {
        newFilter.positions[i] = "_"
      }
    };
    console.log(newFilter)
    getWords(newFilter)
    console.log(wordsList)
    // shape data for API here
    // call getWords api function here with shaped data
  }
  
  return (
    <div className="App">
      <header>
        <div>WordleAssist</div>
      </header>
        <WordleFilter change={change} filter={filter} submit={submit} />
      <div className='wordlist'>
        {
          wordsList.map((word, idx) => {
            return (
              <WordsList word={word.word} id={idx}/>
            )
          })
        }
      </div>
        
      
    </div>
  );
}

export default App;
