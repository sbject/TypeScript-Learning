import {Sorter} from './sorter';
// import {NumbersCollection} from './NumbersCollection';
// import {CharactesCollection} from './CharactersCollection'; 
import {LinkedList} from './LinkedList';


// const numbersCollection = new NumbersCollection([10,3,-5,0]);
// const charsCollection = new CharactesCollection('hello');
// const sorter = new Sorter(numbersCollection);
// const sorter2 = new Sorter(charsCollection);
// sorter.sort();
// sorter2.sort();
// console.log(charsCollection.data);
// console.log(numbersCollection.data);

const linkedList = new LinkedList();
linkedList.add(700);
linkedList.add(800);
linkedList.add(-10);
linkedList.add(0);

const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();

