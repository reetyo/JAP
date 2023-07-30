import type { Word } from "@/lib/loadWord"
import { useContext } from "react";

interface Props {
    word: Word;
    handleOnClick:(word:Word)=>void
  }

export default function ListItem({word,handleOnClick}:Props) {
    return (
        <li key={word.index} onClick={() => handleOnClick(word)}>
            <span className="item item-1">{word.reading}</span>
            <span className="item item-2">{word.kanji}</span>
        </li>
    )
}
