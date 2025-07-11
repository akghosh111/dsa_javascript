class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;

        this.length = 1;
    }

    push(value) {
        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    pop() {

        if(!this.head) {
            return undefined;
        }


        let temp = this.head;
        let prev = this.head;

        while (temp.next) {
            prev = temp;
            temp = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;

        this.length --;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head = newNode;

        this.length++;
        return this;
    }

    shift() {
        if(!this.head) {
            return undefined;
        }

        //1. Point the first node
        let temp = this.head;

        //2 Move the head to the next node
        this.head = this.head.next

        //3 Remove the first node
        temp.next = null;
        this.length--;

        if(this.length ===0) {
            this.tail = null;
        }

        return temp;
    }

    //this shift method is actually for doubly linkedlist

    // shift() {

    //     if(this.length ===0) {
    //         return undefined;
    //     }

    //     let temp = this.head;

    //     if(this.length ===1) {
    //         this.head = null;
    //         this.tail = null;
    //     }

    //     this.head = this.head.next;
    //     this.head.prev = null;
    //     temp.next = null;
    //     this.length--;

    //     return temp;
    // }


    getFirst() {
        return this.head;
    }


    getLast() {
        if(!this.head) {
            return null;
        }

        let temp = this.head;

        while(temp) {
            if(!temp.next){
                return temp;
            }

            temp = temp.next;
        }
    }
}


const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
myLinkedList.push(20);
myLinkedList.push(30);
myLinkedList.push(40);
// myLinkedList.shift();
// myLinkedList.unshift(20);
// myLinkedList.pop();
console.log(myLinkedList.getLast());