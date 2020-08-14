// Write your Character component here
import React from 'react';
import {BASE_URL, CHAR_SPECS, CHAR_ARRAYS} from '../constants'



export default function Character({info, action,  }) {
    return (
      <div>
        {info.name}
        <button onClick={() => action(info.id)}>
        </button>
      </div>
    )
  }