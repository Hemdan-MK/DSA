


class HashTable {
    constructor(size = 20) {
        this.table = new Array(size).fill(null)
    }

    _hash1(key) {

        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }

        return hash % this.table.length;
    }

    _hash2(key) {

        let prime = 11;
        return prime - (key.length % prime);
    }

    set(key, value) {

        let index = this._hash1(key);

        let stepSize = this._hash2(key);
        let i = 0;

        while (this.table[index] !== null) {

            if (this.table[index] === "DELETED") {
                return this.table[index] = [key, value]
            }
            
            if (this.table[index][0] === key) {
                console.log(index);
                return this.table[index][1] = value
            }
            
            index = (index + i * stepSize) % this.table.length;
            i++;
        }
        console.log(index);

        return this.table[index] = [key, value]
    }

    get(key) {
        let index = this._hash1(key);
        let stepSize = this._hash2(key);
        let i = 0;

        while (this.table[index]) {
            if (this.table[index][0] === key) {
                return this.table[index][1]
            }
            index = (index + i * stepSize) % this.table.length;
            i++;
        }
        return "nahi"

    }

    remove(key) {
        let index = this._hash1(key)
        let stepSize = this._hash2(key);
        let i = 0;

        while (this.table[index]) {
            if (this.table[index][0] === key && this.table[index] !== "DELETED") {
                console.log(index);

                return this.table[index] = "DELETED";
            }
            index = (index + i * stepSize) % this.table.length;
            i++;
        }

    }
}

let ht = new HashTable();

ht.set("hemd", "asna1")
console.log(ht.table);
ht.set("hemd", "asna2")
console.log(ht.table);
ht.set("mdhe", "asna")

console.log(ht.table);
ht.remove("hemd")
console.log(ht.table);

// console.log(ht.get("hemd"));
ht.set("hemd", "asna")

console.log(ht.table);
ht.set("hemd", "asna44")
console.log(ht.table);

