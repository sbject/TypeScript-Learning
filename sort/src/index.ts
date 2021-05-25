import {Sorter} from './sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactesCollection} from './CharactersCollection'; 
import {LinkedList} from './LinkedList';


const numbersCollection = new NumbersCollection([10,3,-5,0]);
const charsCollection = new CharactesCollection('hello');
numbersCollection.sort();
charsCollection.sort();
console.log(charsCollection.data);
console.log(numbersCollection.data);

const linkedList = new LinkedList();
linkedList.add(700);
linkedList.add(900);
linkedList.add(-10);
linkedList.add(0);

linkedList.sort();
linkedList.print();

