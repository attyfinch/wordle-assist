import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Route, Routes, Link } from 'react-router-dom'
import BeatLoader from "react-spinners/BeatLoader";

import infoIcon from '../about-50.png'

import About from './About';
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
const initialWordCount = "Submit filter to find available words";

function App() {
  const [filter, setFilter] = useState(initialFilterValues);
  const [wordsList, setWordsList] = useState(initialWordsList);
  const [wordCount, setWordCount] = useState(initialWordCount);
  const [loading, setLoading] = useState(false);

  // Function fomrats numbers with commas
  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const getWords = (wordFilter) => {
    axios.post(url, wordFilter)
      .then((res) => {
        setLoading(false)
        if (res.data.wordsReturned === 0) {
          setWordCount(`No words available based on submitted info`)  
        } else if (res.data.wordsReturned === 1) {
          setWordCount(`${numberWithCommas(res.data.wordsReturned)} available word`)  
        } else {
          setWordCount(`${numberWithCommas(res.data.wordsReturned)} available words`)
        }
        setWordsList(res.data.wordlist)
      })
      .catch((err) => {
        console.log(err.message)
      })
  } 

  const change = (name, value) => {
    // Form validation will go here
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

    getWords(newFilter)
  }
  
  return (
    <div className="App">
      <header>
        <div className='headerLogo'>
          <div>Wordle</div><div className='colorHead'>Assist</div>
        </div>
        <Link to='/about' className='about'><img src={infoIcon} alt='info`'/></Link> 
      </header>
      <Routes >
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element={
          <div>
            <WordleFilter change={change} filter={filter} submit={submit} />
            <div className='wordcount'>
              <div>{loading === false ? wordCount : <BeatLoader color="rgba(255, 255, 255, 1)" size={18} loading={loading}/>}</div>
            </div>
            <div className='wordlist'>
              {
                wordsList.map((word, idx) => {
                  return (
                    <WordsList word={word.word} id={idx} />
                  )
                })
              }
            </div>
          </div>
        }/>
      </Routes>      
    </div>
  );
}

export default App;
