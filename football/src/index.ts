import {MatchReader} from './MatchReader';
import {ConsoleReport} from './reportTargets/ConsoleReport';
import {CsvFileReader} from './CsvFileReader'
import {WinsAnalysis} from './analyzers/WinsAnalysis';
import {Summary} from './Summary';
import {HtmlReport} from './reportTargets/HtmlReport';

// create an object that satisfy Dat 

const csvFileReader = new CsvFileReader('football.csv');

// const dateOfFirstMatch = reader.data[0][0];
// Create an instance of MatchReader and pass sth that satisfies 'DataReder' interface

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);
