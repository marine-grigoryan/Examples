class QueueElement {
    constructor(data, priority)
    {
        this.data = data;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.elements = new LinkedList();
    }

    // Add new element
    enqueue(element, priority) {
        const qElement = new QueueElement(element, priority);
        let isExists = false;

        for(let i = 0; i < this.elements.getSize(); i++) {
            if (this.elements.getDataByIndex(i).priority > qElement.priority) {
                // Add element before the one which priority is bigger
                this.elements.addAt(i, qElement);
                isExists = true;
                break;
            }
        }
        // Add new element at the end ofs the queue
        if (!isExists) {
            this.elements.add(qElement);
        }
    }

    // Delete first element
    dequeue() {
        if (this.elements.getSize() !== 0) {
            return this.elements.removeAt(0);
        }
    }

    // Get queue length
    getSize() {
        return this.elements.getSize();
    }

    // Get the first element
    front() {
        return this.elements.getDataByIndex(0);
    }
}