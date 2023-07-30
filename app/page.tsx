
import {loadWords} from '../lib/loadWord'
import {Word} from '../lib/loadWord'
import DynamicPage from '@/components/dynamicPage';

export default async function Page() {
  const words:Word[] = await getData();

  return (
    DynamicPage({words})
  )
}

async function getData() : Promise<Word[]> {
  // Call an external API endpoint to get posts
  const words = await loadWords() 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return words;
  }