class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length --;
        return lastItem;
    }
}




const newArray = new CustomArray();
newArray.push("one");
newArray.push("two");
newArray.push("three");
newArray.pop();
// console.log(newArray.get(0));
console.log(newArray);