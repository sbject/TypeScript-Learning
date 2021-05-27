import fs from 'fs';
// import {MatchResult} from './MatchResult';

// type MatchData = [Date,string,string,number,number,MatchResult,string];

//Use generic
export abstract class CsvFileReader<T> {
    data: T[] = [];
    constructor(public filename:string){}
    abstract mapRow(row:string[]):T;

    read():void {
        this.data = fs.readFileSync(this.filename,{
            //return string and not a buffer we have add encoding
            encoding:'utf-8'
        })
        .split('\n')
        .map((row:string):string[] =>{
            return row.split(',');
        }
        )
        .map(this.mapRow);
    }
}