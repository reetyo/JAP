import {loadWords} from '../lib/loadWord'
import {Word} from '../lib/loadWord'

export default async function Page() {
  const words:Word[] = await getData();
  return (
    <ul>
      {words.map((word:Word) => (
        <li key={word.index}>{word.reading}</li>
      ))}
    </ul>
  )}

async function getData() : Promise<Word[]> {
  // Call an external API endpoint to get posts
  const words = await loadWords() 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return words;
  }