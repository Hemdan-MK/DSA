


class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char]
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char];
        }
        return node.isEndOfWord
    }

    prefix(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return true;
    }
}

let trie = new Trie();

trie.insert("h")
trie.insert("he")
trie.insert("eh")
console.log(trie.root.children);

console.log("-------------------------------");

console.log(trie.search("eh"));
console.log(trie.search("z"));

console.log("-------------------------------");

console.log(trie.prefix("h"));
console.log(trie.prefix("z"));
