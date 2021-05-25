import fs from 'fs';

const matches = fs.readFileSync('football.csv',{
    //return string and not a buffer we have add encoding
    encoding:'utf-8'
})
.split('\n')
.map((row:string):string[] =>{
    return row.split(',');
}
);

console.log(matches);