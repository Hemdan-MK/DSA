

class HashTable {
    constructor(size = 10) {
        this.table = new Array(size)
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length;
    }

    get(key) {
        let index = this._hash(key);

        while (this.table[index]) {
            if (key === this.table[index][0]) {
                return this.table[index][1]
            }
            index = (index + 1) % this.table.length
        }
        return "Nope"
    }

    set(key, value) {
        if (this.table.length === 0) {
            this.table = []
        }

        let index = this._hash(key);
        while (this.table[index] !== undefined) {
            index = (index + 1) % this.table.length
        }
        return this.table[index] = [key, value]
    }

    remove(key) {
        let index = this._hash(key);

        while (this.table[index]) {
            if (key === this.table[index][0]) {
                return this.table[index] = undefined
            }
            index = (index + 1) % this.table.length
        }
    }
}


let ht = new HashTable();

ht.set("shamil", "hemdan")
ht.set("ilsham", "hemdan")
console.log(ht.get("shamil"));

console.log(ht.table);
ht.remove("shamil")
console.log(ht.table);
ht.set("shamil", "hemdan")
console.log(ht.table);


// console.log(ht.get("hemdan"));

