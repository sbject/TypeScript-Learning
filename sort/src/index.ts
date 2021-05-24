import {Sorter} from './sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactesCollection} from './CharactersCollection'; 

const numbersCollection = new NumbersCollection([10,3,-5,0]);
const charsCollection = new CharactesCollection('hello');
const sorter = new Sorter(numbersCollection);
const sorter2 = new Sorter(charsCollection);
sorter.sort();
sorter2.sort();
console.log(charsCollection.data);
console.log(numbersCollection.data);
