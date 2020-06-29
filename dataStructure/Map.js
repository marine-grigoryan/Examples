class Map {
    constructor() {
        this.elements = {};
        this.size = 0;
    }

    has(key) {
        return (key in this.elements);
    }

    add(key, value) {
        if (!(key in this.elements)) this.size++;
        this.elements[key] = value;
    }

    delete(key) {
        if (key in this.elements) {
            delete this.elements[key];
            this.size--;
        }
    }

    get(key) {
        return (key in this.elements) ? this.elements[key] : null;
    }

    values() {
        return Object.keys(this.elements).reduce((data, element) => {
            data.push(this.elements[element]);
            return data;
        }, []);
    }

    getSize() {
        return this.size;
    }

    clear() {
        this.elements = {};
        this.size = 0;
    }
}