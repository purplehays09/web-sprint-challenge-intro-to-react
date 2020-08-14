// Write your Character component here
import React, {useState, useEffect} from 'react';
import {BASE_URL, CHAR_SPECS, CHAR_ARRAYS} from '../constants'
import styled from 'styled-components'
import axios from 'axios';


const StyledChar = styled.div`
  width: 60%;
  margin:0 auto;

  button {
    color: ${props => {
      const { theme } = props;
      return theme.white;
    }};

    transition: all 0.5s ease-in-out;


  }
`

export default function Character({info, open, close, url}) {
    const [details, setDetails] = useState([])
    const [display, setDisplay] = useState(false)
    // useEffect(() => {
    //     // let charArr = []
    //     // axios.get(url)
    //     // .then(response => {
    //     //     console.log(response.data)

    //     //     CHAR_SPECS.forEach(spec => {
    //     //     console.log(spec)
    //     //     // console.log(response.data.birth_year)
    //     //     console.log(response.data[spec])
    //     //     charArr.push(response.data[spec])
            
    //     //     })
            
    //     // })
    //     // .catch(err => console.log(err))
    //     // console.log(charArr)
    //     // setDetails(charArr)

    //     // console.log(chars)
    //     let detailsArr = []
    //     axios.get(url)
    //         .then(response => {
    //             CHAR_SPECS.forEach(spec => {
    //                 // console.log(spec)
    //                 // console.log(response.data.birth_year)
    //                 // console.log(response.data[spec])
    //                 detailsArr.push(response.data[spec])            
    //             })
    //         })
    //         .catch(err => console.log(err))
            
    //     console.log(detailsArr)

    //     setDetails(detailsArr)

    //     console.log(details)
        

    // },[url])

    function openDeets(){

        setDisplay(!display)
    }

    useEffect(() => {
        console.log(display)
    },[display])

    return (
      <div>
        {info.name}
        <button onClick={openDeets}>
            +
        </button>

        <StyledChar style={{display:display ? '' : 'none'}}>
                {/* {(() => {
                    for(let i in info){
                        <p>{info[i]}</p>
                    }
                })()} */}

                <p>Birth Year: {info.birth_year}</p>
                <p>Gender: {info.gender}</p>
                <p>Eye Color: {info.eye_color}</p>
                <p>Hair Color: {info.hair_color}</p>
                <p>Skin Color: {info.skin_color}</p>
                <p>Height: {info.height}</p>
        </StyledChar>
      </div>
    )
  }