import React, {useState, useEffect} from 'react';
import {BASE_URL, CHAR_SPECS, CHAR_ARRAYS} from './constants'
import Character from './components/Character'
import './App.css';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [chars, setChars] = useState([])
  const [currentChar, setCurrentChar] = useState('1')

  const openDetails = id => {
    setCurrentChar(id)
  }

  const closeDetails = () => {
    setCurrentChar(null)
  }

  useEffect(() => {
    axios.get(`${BASE_URL}people/`)
      .then(res => {
        setChars(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  

  return (
    <div className="App">
      <div className='Title'>
        <h1 className="Header">Characters</h1>
      </div>
      <div className='characters'>
        {chars}
        {
          chars.map(char => {
            return <p key={char.id}> {char.name}</p>
          })
        }
      </div>
      
    </div>
  );
}

export default App;
