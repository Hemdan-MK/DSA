

class HashTable {
    constructor(size = 10) {
        this.table = new Array(size)
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.table.length
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = []
        }
        this.table[index].push([key, value])
    }

    get(key) {
        let index = this._hash(key);
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                return pair[1]
            }
        }
        return "No Keys"
    }

    remove(key) {
        let index = this._hash(key);

        return this.table[index] = this.table[index].filter((val)=>{
            val[0] !== key
        })
    }
}



let ht = new HashTable()

ht.set("hemdan", "asna")
ht.set("danhem", "naas");

console.log(ht.get("danhem"));

ht.remove("danhem");
console.log(ht.get("danhem"));