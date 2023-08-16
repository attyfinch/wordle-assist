import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import BeatLoader from "react-spinners/BeatLoader";

import WordleFilter from './WordleFilter';
import WordsList from './WordsList';

const url = process.env.REACT_APP_API

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
const initialWordCount = "Submit filter to see available words";

function App() {
  const [filter, setFilter] = useState(initialFilterValues);
  const [wordsList, setWordsList] = useState(initialWordsList);
  const [wordCount, setWordCount] = useState(initialWordCount)
  const [loading, setLoading] = useState(false);

  function numberFormat(num) {
    let numString = num.toString().split('');
    let finalNum = [];
    for (let i = numString.length-1; i >= 0; i--) {
      console.log(numString[i])
      if (i === 2 && numString.length === 5) {
        finalNum.unshift(`,${numString[i]}`);
      } else if (i === 1 && numString.length === 4) {
        finalNum.unshift(`,${numString[i]}`);
      } else {
        finalNum.unshift(numString[i]);
      }
    }
    return finalNum.join('')
  }

  const getWords = (wordFilter) => {
    axios.post(url, wordFilter)
      .then((res) => {
        setLoading(false)
        setWordCount(`${numberFormat(res.data.wordsReturned)} available words`)
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
    setWordsList(initialWordsList)
    setLoading(true)
    
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
      } else {
        newFilter.positions[i] = newFilter.positions[i].toUpperCase();
      }
    };

    for (let i = 0; i <= newFilter.include.length-1; i++) {
      if (newFilter.include[i] !== "_") {
        newFilter.include[i] = newFilter.include[i].toUpperCase();
      } 
    };

    newFilter.exclude = newFilter.exclude.toUpperCase();
    newFilter.char1Exclude = newFilter.char1Exclude.toUpperCase();
    newFilter.char2Exclude = newFilter.char2Exclude.toUpperCase();
    newFilter.char3Exclude = newFilter.char3Exclude.toUpperCase();
    newFilter.char4Exclude = newFilter.char4Exclude.toUpperCase();
    newFilter.char5Exclude = newFilter.char5Exclude.toUpperCase();

    console.log(newFilter)
    getWords(newFilter)
  }
  
  return (
    <div className="App">
      <header>
        <div className='headerLogo'>
          <div>Wordle</div><div className='colorHead'>Assist</div>
        </div>
        <div>
          ??
        </div>
      </header>
        <WordleFilter change={change} filter={filter} submit={submit} />
      <div>{loading === false ? wordCount : <BeatLoader color="rgba(255, 255, 255, 1)" size={18} loading={loading}/>}</div>
      <div></div>
      <div className='wordlist'>
        {
          wordsList.map((word, idx) => {
            return (
              <WordsList word={word.word} id={idx} wordCount={wordCount}/>
            )
          })
        }
      </div>
        
      
    </div>
  );
}

export default App;
