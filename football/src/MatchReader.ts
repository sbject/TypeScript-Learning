import {dateStringToDate} from './utils';
import {MatchResult} from './MatchResult';
type MatchData = [Date,string,string,number,number,MatchResult,string];


interface DataReader {
    read():void;
    data:string[][];
}


export class MatchReader {
    
    matches: MatchData[] = [];
    // shortened syntax to pass Data Reader to a class which can be csv reader or net reader in the future
    constructor(public reader: DataReader){}

    load():void{
        this.reader.read();
        this.matches = this.reader.data
        .map((row:string[]):MatchData=>{
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult, // 'H', 'A', 'D'
                row[6]
            ]
        });
    }


}