class Node {

    next:Node | null = null; //by default next is null also an interesting way to reference object of the same kind
    constructor(public data:number){}
}

export class LinkedList {
    head: Node | null = null;

    add(data :number): void {
        const node = new Node(data);
        if (!this.head){
            //that's where we define head - only once so it is in the beginning
            this.head = node;
            return;
        }

        let tail = this.head;
        while(tail.next){
            tail = tail.next;
        }
        //update the previously last node which was pointing to null 
        tail.next = node;
    }

    get length():number {
        if(!this.head){
            return 0;
        }
        let length = 1;
        //running from the very first or head node and further
        let node = this.head;
        while(node.next){
            length++;
            node = node.next;
        }
        return length;
    }
    at(index:number): Node {
        if(!this.head){
            throw new Error('index out of bounds');
        }
        let counter = 0;
        let node: Node | null = this.head;
        while(node){
            if(counter === index){
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }

    compare(leftIndex:number,rightIndex:number):boolean{
        if(!this.head){
            throw new Error('List is emmpty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex:number,rightIndex:number):void{
        //kinda cheating cause we gonna swap just values and not nodes
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    print():void {
        if(!this.head){
            return;
        }

        let node: Node | null = this.head;
        while(node){
            console.log(node.data);
            node = node.next;
        }
    }
}