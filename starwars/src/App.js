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
  const [charURL, setCharURL] = useState()

  const openDetails = url => {
    // let charArr = []
    // axios.get(url)
    //   .then(response => {
    //     console.log(response.data)

    //     CHAR_SPECS.forEach(spec => {
    //       console.log(spec)
    //       // console.log(response.data.birth_year)
    //       console.log(response.data[spec])
    //       charArr.push(response.data[spec])
          
    //     })
        
    //   })
    //   .catch(err => console.log(err))
    // console.log(charArr)
    // setCharDetails(charArr)

    // console.log(chars)
    // chars.map(char => {
    //   console.log(url)
    //   if(url === char[url]){
    //     console.log(char)
    //     setCharDetails(char)
    //   }
    // })
    setCharURL(url)
    console.log(charURL)
  }

  const closeDetails = () => {
    setCharURL(null)
  }

  useEffect(() => {

  })

  useEffect(() => {
    axios.get(`${BASE_URL}people/`)
      .then(res => {
        setChars(res.data.results)
        // console.log(res.data.results)
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
        {
          chars.map(char => {
            return <Character key={char.url} open={openDetails} close={closeDetails} info={char} url={charURL}> {char.name}</Character>
          })
        }
      </div>
      
    </div>
  );
}

export default App;
