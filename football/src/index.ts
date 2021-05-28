import {MatchReader} from './MatchReader';
import {MatchResult} from './MatchResult';
import {CsvFileReader} from './CsvFileReader'

// create an object that satisfy Dat 

const csvFileReader = new CsvFileReader('football.csv');

// const dateOfFirstMatch = reader.data[0][0];
// Create an instance of MatchReader and pass sth that satisfies 'DataReder' interface

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
    if(match[1]==='Man United' && match[5]===MatchResult.HomeWin){
        manUnitedWins++;
    } else if (match[2]==='Man United' && match[5]===MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United wins ${manUnitedWins} games`);