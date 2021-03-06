class ArrayOfNumbers {
    constructor(public colllection:number[]) {}

    get(index:number):number {
        return this.colllection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection:string[]){}

    get(index:number):string {
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {
    constructor(public collection:T[]){}

    get(index:number):T {
        return this.collection[index];
    }
}

const arr = new ArrayOfAnything(['a','b']);

// Example of generics with functions

function printStrings(arr:string[]):void{
    for(let i=0;i<arr.length;i++ ){
        console.log(arr[i]);
    }
}

function printNumbers(arr:number[]):void{
    for(let i=0;i<arr.length;i++ ){
        console.log(arr[i]);
    }
}

function printAnything<T>(arr:T[]):void{
    for(let i=0;i<arr.length;i++ ){
        console.log(arr[i]);
    }
}

printAnything<string>(['a','b','c']);
printAnything(['a','b','c']);


class House {
    print():void{
        console.log("I am a house");
    }
}

class GoodCar {
    print():void {
        console.log("I am a good car");
    }
}

// generic constraint we are going to use
interface Printable {
    print():void;
}

function printHouseOrCars<T extends Printable>(arr:T[]):void {
    for (let i = 0;i<arr.length;i++) {
        arr[i].print();
    }
}

printHouseOrCars<House>([new House(),new House()]);