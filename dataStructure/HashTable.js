class HashTable {
    constructor(size) {
        this.table = [];
        this.size = size;
    }

    hash(key) {
        return key.length % this.size;
    }

    add(key, value) {
        const index = this.hash(key);

        if (this.table[index] === undefined) {
            this.table[index] = [[key, value]];
        } else {
            let isExists = false;

            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    isExists = true;
                }
            }
            if (isExists === false) {
            this.table[index].push([key, value]);
            }
        }
    }

    delete(key) {
        const index = this.hash(key);

        if (this.table[index].length === 1 && this.table[index][0][0] === key) {
            delete this.table[index];
        } else {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                }
            }
        }
    }

    get(key) {
        const index = this.hash(key);

        if (this.table[index] === undefined) {
            return undefined;
        } else {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
    }
}