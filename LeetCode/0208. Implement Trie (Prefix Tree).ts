class Trie {
  #trie: {[key: string]: {}};

  constructor() {
    this.#trie = {};
  } // constructor()

  insert(word: string): void {
    let dict = this.#trie;
    for (const ch of word) {      
      if (!(ch in dict)) {
        dict[ch] = {};
      }
      dict = dict[ch];
    }
    dict["."] = ".";
  } // insert()

  search(word: string): boolean {
    let dict = this.#trie;
    for (const ch of word) {
      if (!(ch in dict)) {
        return false;
      }
      dict = dict[ch];
    }
    return "." in dict;
  } // search()

  startsWith(prefix: string): boolean {
    let dict = this.#trie;
    for (const ch of prefix) {
      if (!(ch in dict)) {
        return false;
      }
      dict = dict[ch];
    }
    return true;
  } // startsWith()
} // Trie()

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("apple"));
trie.insert("app");
console.log(trie.search("app"));
