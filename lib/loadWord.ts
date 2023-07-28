const csv = require('csvtojson')
const path = require('path')

export class Word {
  reading : string;
  kanji : string;
  chineseMeaning : string;
  index : number;

  constructor() {
    this.reading = "";
    this.kanji = "";
    this.chineseMeaning = "";
    this.index = 0;
  }
}

export async function loadWords() {
  const csvFilePath = path.join(process.cwd(), './word/word.csv')
  const jsonArray = await csv().fromFile(csvFilePath)
  console.log(jsonArray)
  const words : Word[] = []

  for (const [index, item] of jsonArray.entries()){
    const word = item
    word.index = index
    words.push(word)
  }

  return jsonArray;
}