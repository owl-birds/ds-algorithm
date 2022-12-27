var Node_trie = /** @class */ (function () {
    function Node_trie() {
        // this.keys = new Map();
        this.keys = {};
        this.end = false;
    }
    Node_trie.prototype.set_end = function () {
        this.end = true;
    };
    Node_trie.prototype.is_end = function () {
        return this.end;
    };
    return Node_trie;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new Node_trie();
    }
    Trie.prototype.add = function (input, node) {
        if (node === void 0) { node = this.root; }
        //
        if (input.length === 0) {
            // at the end of the word
            node.set_end();
            return;
        }
        // if (!node.keys.has(input[0])) {
        if (!node.keys[input[0]]) {
            // isnt exist (if the letter(key)) doesnt exist
            // node.keys.set(input[0], new Node_trie());
            node.keys[input[0]] = new Node_trie();
            // key(letter) => (pointing) => New Node
            // return this.add(input.substring(1), node.keys.get(input[0]));
            return this.add(input.substring(1), node.keys[input[0]]);
        }
        // if (node.keys.has(input[0])) {
        if (node.keys[input[0]]) {
            // is already existed
            // return this.add(input.substring(1), node.keys.get(input[0]));
            return this.add(input.substring(1), node.keys[input[0]]);
        }
    };
    Trie.prototype.is_word = function (word) {
        var node = this.root;
        var tempWord = word;
        while (tempWord.length > 1) {
            // if (!node.keys.has(tempWord[0])) return false;
            if (!node.keys[tempWord[0]])
                return false;
            // node = node.keys.get(tempWord[0])!;
            node = node.keys[tempWord[0]];
            tempWord = tempWord.substring(1);
        }
        // const lastNode: Node_trie | undefined = node.keys.get(tempWord);
        var lastNode = node.keys[tempWord];
        if (lastNode)
            return lastNode.is_end();
        return false;
    };
    Trie.prototype.print = function () {
        var _this = this;
        var words = [];
        var search = function (node, str) {
            if (node === void 0) { node = _this.root; }
            //
            // if (node.keys.size > 0) {
            if (Object.keys(node.keys).length > 0) {
                // for (let letter of node.keys.keys()) {
                for (var _i = 0, _a = Object.keys(node.keys); _i < _a.length; _i++) {
                    var letter = _a[_i];
                    // search(node.keys.get(letter), `${str}${letter}`);
                    search(node.keys[letter], "".concat(str).concat(letter));
                }
                if (node.is_end())
                    words.push(str);
            }
            else {
                str.length > 0 ? words.push(str) : undefined;
                return;
            }
        };
        search(this.root, "");
        return words.length > 0 ? words : null;
    };
    return Trie;
}());
var trie1 = new Trie();
trie1.add("word");
console.log(trie1.is_word("word"), "word");
console.log(trie1.is_word("word1"), "word1");
trie1.add("word1");
console.log(trie1.is_word("word1"), "word1");
trie1.add("wordwordwordword");
console.log(trie1.is_word("wor"), "wor");
console.log(trie1.is_word("wordwordwordword"), "wordwordwordword");
trie1.add("will");
trie1.add("bad");
trie1.add("bed");
console.log(trie1.is_word("be"), "be");
console.log(trie1.is_word("bed"), "bed");
trie1.add("be");
console.log(trie1.is_word("be"), "be");
console.log(trie1.print());
// console.log(trie1.root.keys.keys());
// console.log(trie1.root.keys.get("b")?.keys.keys());
//
console.log("BUG");
