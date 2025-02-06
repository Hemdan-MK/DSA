

class HashTable {
    constructor(size = 20) {
        this.table = new Array(size)
    }

    _hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }

        return hash % this.table.length
    }

    set(key, value) {
        let index = this._hash(key);

        let i = 1;

        while (this.table[index]) {
            index = (index + i * i) % this.table.length;
            i++;
        }
        console.log(i);

        return this.table[index] = [key, value]
    }

    get(key) {
        let index = this._hash(key);

        let i = 1;

        while (this.table[index]) {
            if (this.table[index][0] === key) {
                return this.table[index][1]
            }
            index = (index + i * i) % this.table.length;
            i++
        }

        return "No bro"
    }

    remove(key) {
        let index = this._hash(key);

        let i = 1;

        while (this.table[index]) {
            if (this.table[index][0] === key) {
                return this.table[index] = undefined;
            }
            
            index = (index + i * i) % this.table.length;
            i++
        }
    }
}


let ht = new HashTable();

console.log(ht.table);
ht.set("hemd", "asna")
ht.set("hemd", "asna")
ht.set("hemd", "asna")
ht.set("hemd", "asna")
ht.set("hemd", "asna")
ht.set("hemd", "asna")
ht.set("hemd", "asna")
ht.set("hemd", "asna")
ht.set("hemd", "asna")
ht.set("hemd", "asna")
ht.set("hemd", "asna")
ht.set("hemd", "asna")
ht.set("hemd", "asna")
ht.set("hemd", "asna")



console.log(ht.table);



