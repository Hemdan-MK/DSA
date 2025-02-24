


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

    autocompletion(prefix) {
        let node = this.root;

        for (let char of prefix) {
            if (!node.children[char]) {
                return []
            }
            node = node.children[char]
        }

        let res = [];
        this._dfs(node, prefix, res);
        return res
    }

    _dfs(node, prefix, res) {
        if (node.isEndOfWord) {
            res.push(prefix)
        }

        for (let char in node.children) {
            this._dfs(node.children[char], prefix + char, res)
        }
    }

    longestCommonPrefix() {
        let node = this.root;
        let prefix = ""

        while (node && Object.keys(node.children).length === 1) {
            let char = Object.keys(node.children)[0]
            prefix += char;
            node = node.children[char]
        }

        return prefix ? prefix : "No Common Prefix"
    }
}


let trie = new Trie();

trie.insert("h")
trie.insert("heeee")
trie.insert("heeeemdan")
trie.insert("heeeeza");
console.log(trie.root.children);

console.log("-------------------------------");

console.log(trie.search("eh"));
console.log(trie.search("z"));

console.log("-------------------------------");

console.log(trie.prefix("h"));
console.log(trie.prefix("z"));

console.log("-------------------------------");

console.log(trie.autocompletion("h"));
console.log(trie.autocompletion("z"));

console.log("-------------------------------");

console.log(trie.longestCommonPrefix());

console.log("-------------------------------");