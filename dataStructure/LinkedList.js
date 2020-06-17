class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const node = new Node(data);
        let current;

        // If linked list is empty, data added as head
        if (this.head === null) {
            this.head = node;
        } else { // data is added as a list last element
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    addAt(index, data) {
        if (index > this.size) {
            return false;
        } else {
            const node = new Node(data);
            let current;
            let prev;

            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                current = this.head;
                let currentIndex = 0;

                while (currentIndex < index) {
                    prev = current;
                    current = current.next;
                    currentIndex++
                }

                prev.next = node;
                node.next = current;
            }
            this.size++;
        }
    }

    remove(data) {
        let current = this.head;
        let previous;

        // Remove head if the list has only one element
        if (current.data === data) {
            this.head === current.next;
        } else {
            while (current.data !== data) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    removeAt(index) {
        if (index > this.size) {
            return false;
        } else {
            let current = this.head;
            let currentIndex = 0;
            let prev;

            if (index === 0) {
                this.head = current.next;
            } else {
                while (currentIndex < index) {
                    prev = current;
                    current = current.next;
                    currentIndex++;
                }
                prev.next = current.next
            }
            this.size--;
            return current.data;
        }
    }

    getDataByIndex(index) {
        let current = this.head;
        let currentIndex = 0;

        while(currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
        return current.data;
    }

    getIndexByData(data) {
        let current = this.head;
        let index = -1;

        while (current) {
            index++;
            if (current.data === data) return index;
            current = current.next;
        }
        return -1;
    }

    getSize() {
        return this.size;
    }

    getLInkedList() {
        return this.head;
    }

    reverse() {
        let node = this.head;
        let previous;
        let tmp;

        while (node) {
            tmp = node.next;
            node.next = previous;
            previous = node;
            node = tmp;
        }
        this.head = previous;
    }

    shuffle() {
        let index = 1;

        while(index < Math.floor(this.size / 2) + 1) {
            const data = this.getDataByIndex(index);

            this.removeAt(index);
            this.add(data);
            index++;
        }
    }
}