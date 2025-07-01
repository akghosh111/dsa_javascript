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
}




const newArray = new CustomArray();
newArray.push("one");
newArray.push("two");
newArray.push("three");
console.log(newArray.get(0));
console.log(newArray);