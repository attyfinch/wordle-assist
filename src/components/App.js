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

  // getWords function

  const change = (name, value) => {
    // Do form validation here
    setFilter({
      ...filter,
      [name]: value
    })
  }

  const submit = () => {
    console.log(filter)
    // shape data for API here
    // call getWords api function here with shaped data
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <WordleFilter change={change} filter={filter} submit={submit} />
        <WordsList />
      </header>
    </div>
  );
}

export default App;
