class Sorter {
    constructor(public collection:number[] | string){
    }
    sort(): void {
        // const length = this.collection.length;
        const {length} = this.collection
        for (let i=0;i<length;i++)
        {
            for (let j=0;j<length-i-1;j++)
            {
                //If collection is an array of numbers
                //All of this works if collection is array of numbers
                //Gonna use Type Guard
                if(this.collection instanceof Array){
                    if(this.collection[j]>this.collection[j+1]){
                        const temp = this.collection[j];
                        this.collection[j]=this.collection[j+1];
                        this.collection[j+1] = temp;
                    }
                }
                // type guard for string bool number or symbol only:
                if(typeof this.collection === 'string')
                {
                    this.collection.
                }

                //Only going to work if collection is a string
            }
        }
    }
}

const sorter = new Sorter([10,3,-5,0]);
sorter.sort();
console.log(sorter.collection);
