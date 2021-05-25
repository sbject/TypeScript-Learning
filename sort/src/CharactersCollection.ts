import {Sorter} from './sorter';

export class CharactesCollection extends Sorter {
    constructor(public data:string){
        super();
    }

    get length():number{
        return this.data.length;
    }

    compare(leftIndex:number,rightIndex:number):boolean{
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex:number,rightIndex:number):void {
        const charz = this.data.split('');
        const leftHand = charz[leftIndex];
        charz[leftIndex] = charz[rightIndex];
        charz[rightIndex] = leftHand;
        this.data = charz.join('');
    }
}