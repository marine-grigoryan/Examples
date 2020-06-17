class Map {
    constructor(data = []) {
        this.elements = data;
        this.size = 0;
    }

    add(key, value) {
        let isExist = false;

        for(let i=0; i < this.elements.length; i++) {
            if (this.elements[i][0] === key) {
                this.elements[i][1] = value;
                isExist = true;
            }
        }

        if(!isExist) {
            this.elements.push([key, value]);
            this.size++;
        }
    }

    delete(key) {
        for(let i=0; i < this.elements.length; i++) {
            if (this.elements[i][0] === key) {
                this.elements[i].splice(i, 1);
                this.size--;
            }
        }
    }

    get(key) {
        for(let i=0; i < this.elements.length; i++) {
            if (Object.is(key, this.elements[i][0])) {
                return this.elements[i][1];
            }
        }
    }

    keys() {
        const keys = [];

        for(let i=0; i < this.elements.length; i++) {
            keys.push(this.elements[i][0]);
        }

        return keys;
    }

    values() {
        const values = [];

        for(let i=0; i < this.elements.length; i++) {
            values.push(this.elements[i][1]);
        }

        return values;
    }

    getSize() {
        return this.size;
    }

    clear() {
        this.elements = [];
        this.size = 0;
    }
}
