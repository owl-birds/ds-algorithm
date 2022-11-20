var _a, _b;
// TEST
if (null)
    console.log("NULL");
if (!null)
    console.log("!NULL");
var MyNode = /** @class */ (function () {
    function MyNode(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
    MyNode.prototype.getData = function () {
        return this.data;
    };
    MyNode.prototype.setData = function (newData) {
        try {
            this.data = newData;
            return true;
        }
        catch (error) {
            return {
                customMessage: "Error when setting new data to the node",
                jsMessage: error.message
            };
        }
    };
    return MyNode;
}());
var tempMyNode = new MyNode({ what: "ok" });
// console.log(tempMyNode);
var tempMyNode2 = new MyNode({ what: "ok2" });
tempMyNode.left = tempMyNode2;
console.log(tempMyNode.left.getData());
tempMyNode.left.setData(8989889);
console.log(tempMyNode.left.getData());
console.log(tempMyNode2.getData());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.getRoot = function () {
        if (this.root === null)
            return null;
        return this.root;
    };
    //
    BinarySearchTree.prototype.insertNumber = function (data) {
        if (this.root === null) {
            this.root = new MyNode(data);
            return true;
        }
        else {
            var searchTree_1 = function (node) {
                if (data < node.getData()) {
                    if (node.left === null) {
                        node.left = new MyNode(data);
                        return true;
                    }
                    else if (node.left !== null) {
                        return searchTree_1(node.left);
                    }
                }
                else if (data > node.getData()) {
                    if (node.right === null) {
                        node.right = new MyNode(data);
                        return true;
                    }
                    else if (node.right !== null) {
                        return searchTree_1(node.right);
                    }
                }
                return false;
                // if the data is the same with the
                // current node
            };
            return searchTree_1(this.root);
        }
    };
    BinarySearchTree.prototype.hasNumberRec = function (findData) {
        if (this.root === null) {
            return false;
        }
        var searchTree = function (node) {
            if (findData === node.getData())
                return true;
            else if (findData < node.getData() && node.left !== null) {
                return searchTree(node.left);
            }
            else if (findData > node.getData() && node.right !== null) {
                return searchTree(node.right);
            }
            else {
                return false;
            }
        };
        return searchTree(this.root);
    };
    BinarySearchTree.prototype.hasNumberLoop = function (findData) {
        if (this.root === null) {
            return false;
        }
        var currentNode = this.root;
        while (currentNode.getData() !== findData) {
            if (findData < currentNode.getData() && currentNode.left !== null) {
                currentNode = currentNode.left;
            }
            else if (findData > currentNode.getData() &&
                currentNode.right !== null) {
                currentNode = currentNode.right;
            }
            else {
                break;
            }
        }
        return currentNode.getData() === findData;
        return false;
    };
    BinarySearchTree.prototype.hasNumberLoop2 = function (findData) {
        // if (this.root === null) return false;
        var currentNode = this.root;
        while (currentNode) {
            // if the node null it will break the loop
            if (findData === currentNode.getData())
                return true;
            else if (findData > currentNode.getData()) {
                currentNode = currentNode.right;
            }
            else {
                currentNode = currentNode.left;
            }
        }
        return false;
    };
    BinarySearchTree.prototype.findBasedOnNumberRec = function (findData) {
        if (this.root === null)
            return null;
        var currentNode = this.root;
        var searchTree = function (node, data) {
            if (node.getData() === data) {
                return node;
            }
            else if (data > node.getData() && node.right !== null) {
                return searchTree(node.right, data);
            }
            else if (data < node.getData() && node.left !== null) {
                return searchTree(node.left, data);
            }
            else {
                return null;
            }
        };
        return searchTree(currentNode, findData);
    };
    //
    BinarySearchTree.prototype.findMinRec = function () {
        if (this.root === null) {
            return false;
        }
        var searchTree = function (node) {
            if (node.left === null) {
                return node.getData();
            }
            return searchTree(node.left);
        };
        return searchTree(this.root);
    };
    BinarySearchTree.prototype.findMinLoop = function () {
        if (this.root === null) {
            return false;
        }
        var currentNode = this.root;
        while (currentNode.left !== null) {
            currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.left;
        }
        return currentNode.getData();
    };
    BinarySearchTree.prototype.findMaxRec = function () {
        if (this.root === null) {
            return false;
        }
        var searchTree = function (node) {
            if (node.right === null) {
                return node.getData();
            }
            return searchTree(node.right);
        };
        return searchTree(this.root);
    };
    BinarySearchTree.prototype.findMaxLoop = function () {
        if (this.root === null) {
            return false;
        }
        var currentNode = this.root;
        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode.getData();
    };
    //
    BinarySearchTree.prototype.removeNumber = function (findData) {
        if (this.root === null)
            return false;
        var removeNode = function (node, findData) {
            if (node === null)
                return null;
            if (findData === node.getData()) {
                // dont have children wether its right or left
                if (node.right === null && node.left === null) {
                    return null;
                }
                // only left
                if (node.right === null) {
                    return node.left;
                }
                // only right
                if (node.left === null) {
                    return node.right;
                }
                // has  both children
                var tempNode = node.right;
                // we go to the right of the soon delted node
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                } // then we go the the most left from there
                node.setData(tempNode.getData());
                node.right = removeNode(node.right, tempNode.getData());
                return node;
            }
            else if (findData > node.getData() && node.right !== null) {
                node.right = removeNode(node.right, findData);
                return node;
            }
            else if (findData < node.getData() && node.left !== null) {
                node.left = removeNode(node.left, findData);
                return node;
            }
            return null;
        };
        this.root = removeNode(this.root, findData);
        return true;
    };
    // clean tree
    BinarySearchTree.prototype.cleanTree = function () {
        if (this.root === null)
            return false;
        this.root = null;
        return true;
    };
    // bst height and traversal
    // a balanced tree if the difference between the min
    // height and the max heigth is at most 1 (<=1 difference)
    BinarySearchTree.prototype.findMinHeight = function (node) {
        if (node === void 0) { node = this.root; }
        // find the first node that doesnt have two childrehm
        // the distance from the root node to the leaf node
        // without two children
        if (!node)
            return -1;
        var left = this.findMinHeight(node.left);
        var right = this.findMinHeight(node.right);
        if (left < right)
            return left + 1;
        else
            return right + 1;
    };
    BinarySearchTree.prototype.findMaxHeight = function (node) {
        if (node === void 0) { node = this.root; }
        if (!node)
            return -1;
        var left = this.findMaxHeight(node.left);
        var right = this.findMaxHeight(node.right);
        if (left > right)
            return left + 1;
        else
            return right + 1;
    };
    BinarySearchTree.prototype.isBalanced = function (node) {
        if (node === void 0) { node = this.root; }
        return this.findMaxHeight(node) - this.findMinHeight(node) <= 1;
    };
    // traversal
    // 1. in-order : begin on the most left node
    BinarySearchTree.prototype.inOrder = function () {
        if (this.root === null)
            return null;
        var result = new Array();
        var traverseinOrder = function (node) {
            node.left && traverseinOrder(node.left); // increasing
            // node.right && traverseinOrder(node.right); // decreasing
            // if there is left child traverse left
            result.push(node.getData());
            // node.left && traverseinOrder(node.left);
            node.right && traverseinOrder(node.right);
            // if there is right child traverse right
        };
        traverseinOrder(this.root);
        return result;
    };
    return BinarySearchTree;
}());
var bst = new BinarySearchTree();
console.log(bst);
console.log("root data : ".concat((_a = bst.getRoot()) === null || _a === void 0 ? void 0 : _a.getData()));
bst.insertNumber(99999);
console.log(bst);
console.log("root data : ".concat((_b = bst.getRoot()) === null || _b === void 0 ? void 0 : _b.getData()));
bst.getRoot().left = new MyNode("LEFT CHILD OF ROOT");
bst.getRoot().right = new MyNode("RIGHT CHILD OF ROOT");
console.log(bst);
// testing recursive and more deep understanding
var testSearchArrRecursive = function (array, findValue, //
idx) {
    if (idx === void 0) { idx = 0; }
    //
    if (idx > array.length - 1) {
        return false;
    }
    if (array[idx] === findValue) {
        return idx;
    }
    else {
        return testSearchArrRecursive(array, findValue, idx + 1);
    }
};
var addToLeftNode = function (bst) {
    bst.getRoot().left = new MyNode(1111);
};
console.log(testSearchArrRecursive([1, 2, 3, 4, 5, 6], 4, 0));
var bst2 = new BinarySearchTree();
bst2.insertNumber(22222);
console.log("BST2");
console.log(bst2);
// addToLeftNode(bst2);
console.log(bst2.insertNumber(111));
console.log(bst2);
console.log(bst2.insertNumber(333333333333));
console.log(bst2);
console.log(bst2.insertNumber(333333333333));
console.log(bst2);
console.log(bst2.getRoot().right);
console.log(bst2.insertNumber(4444444444444444));
console.log(bst2.getRoot().right);
console.log(bst2);
console.log(bst2.insertNumber(5555555555555555));
console.log("root.left.data : ".concat(bst2
    .getRoot()
    .left.getData(), " : is exist : ").concat(bst2.hasNumberRec(111)));
console.log("root.left.data (loop way) : ".concat(bst2
    .getRoot()
    .left.getData(), " : is exist : ").concat(bst2.hasNumberLoop(111)));
console.log("root.right.data : ".concat(bst2
    .getRoot()
    .right.getData(), " : is exist : ").concat(bst2.hasNumberRec(333333333333)));
console.log("far right ".concat(bst2
    .getRoot()
    .right.right.right.getData(), " exist : ").concat(bst2.hasNumberRec(4444444444444444), "\n"));
console.log("far right (loop way) ".concat(bst2
    .getRoot()
    .right.right.right.getData(), " exist : ").concat(bst2.hasNumberLoop(4444444444444444), "\n"));
console.log("min num in treee : ".concat(bst2.findMinRec()));
console.log("min num in treee (loop way) : ".concat(bst2.findMinLoop()));
console.log("max num in treee : ".concat(bst2.findMaxRec()));
console.log("max num in treee (loop way) : ".concat(bst2.findMaxLoop()));
console.log(bst2.insertNumber(333333333333));
console.log(bst2.insertNumber(3));
console.log(bst2.getRoot());
console.log("min num in treee : ".concat(bst2.findMinRec()));
console.log("min num in treee (loop way) : ".concat(bst2.findMinLoop()));
console.log("root.left.data (loop way) : ".concat(bst2
    .getRoot()
    .left.getData(), " : is exist : ").concat(bst2.hasNumberLoop(111)));
console.log("root.left.data (loop way 2.0) : ".concat(bst2
    .getRoot()
    .left.getData(), " : is exist : ").concat(bst2.hasNumberLoop2(111)));
var bst3 = new BinarySearchTree();
console.log("BST3");
console.log(bst3);
console.log(bst3.insertNumber(9));
console.log(bst3.insertNumber(9));
console.log(bst3.insertNumber(10));
console.log(bst3.insertNumber(4));
console.log(bst3);
// bst.getRoot().left = null; // not working
// delete bst.getRoot().left; // not working
// console.log(bst3);
var test = function () {
    if (1)
        return 1;
    if (1)
        return 2;
};
console.log(test());
console.log(bst3.insertNumber(10));
bst3.insertNumber(11);
bst3.insertNumber(2);
console.log(bst3);
console.log(bst3.findBasedOnNumberRec(10));
// console.log(bst3.findBasedOnNumberRec(4));
// console.log(bst3.findBasedOnNumberRec(2));
// console.log(bst3.findBasedOnNumberRec(11));
// console.log(bst3.findBasedOnNumberRec(100));
console.log("testing remove node");
console.log(bst3);
console.log(bst3.hasNumberLoop(4));
bst3.removeNumber(4);
console.log(bst3.hasNumberLoop(4));
// console.log(bst3);
console.log(bst3.hasNumberLoop(10));
bst3.removeNumber(10);
// console.log(bst3);
console.log(bst3.hasNumberLoop(10));
console.log(bst3.findMaxRec());
console.log(bst3);
console.log(bst3.findMaxHeight());
console.log(bst3.findMinHeight());
// bst3.insertNumber(9); // bst cant have duplicates
bst3.insertNumber(10);
bst3.insertNumber(13);
bst3.insertNumber(12);
bst3.insertNumber(1);
console.log(bst3.findMaxHeight());
console.log(bst3.findMinHeight());
console.log(bst3.isBalanced());
bst3.insertNumber(9000);
console.log(bst3.inOrder());
// console.log(bst3.cleanTree());
// console.log(bst3.inOrder());
