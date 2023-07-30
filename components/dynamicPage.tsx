'use client'

import {Word} from '../lib/loadWord'
import ListItem from '../components/listItem';
import { useContext,createContext, useState } from 'react';

interface Props {
    words: Word[];
  }

export default async function DynamicPage({}) {
    const [currentWord,setCurrentWord] = useState(words[0])
    const CurrentWordContext = createContext(currentWord)
  
    return (
    <CurrentWordContext.Provider value={currentWord}>
    <ul className='list'>
        {words.map((word:Word) => (
          ListItem({word,handleOnClick})
        ))}
      </ul>
    </CurrentWordContext.Provider>
    )
  
    function handleOnClick(word:Word){
      setCurrentWord(word)
    }
  
  }