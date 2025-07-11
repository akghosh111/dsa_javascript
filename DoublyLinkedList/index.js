class DoublyLinkedList {

    shift() {
        let temp = this.head;

        if(this.length ===1) {
            this.head = null;
            this.tail = null;
        }

        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
        this.length--;

        return temp;
    }
}