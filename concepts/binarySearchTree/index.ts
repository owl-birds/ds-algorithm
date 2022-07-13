// TEST
if (null) console.log("NULL");
if (!null) console.log("!NULL");

class MyNode {
  left: MyNode | null = null;
  right: MyNode | null = null;
  protected data: any;
  constructor(data: any) {
    this.data = data;
  }
  getData(): any {
    return this.data;
  }
  setData(
    newData: any
  ): boolean | { customMessage: String; jsMessage: String | any } {
    try {
      this.data = newData;
      return true;
    } catch (error) {
      return {
        customMessage: "Error when setting new data to the node",
        jsMessage: error.message,
      };
    }
  }
}
const tempMyNode = new MyNode({ what: "ok" });
// console.log(tempMyNode);
const tempMyNode2 = new MyNode({ what: "ok2" });
tempMyNode.left = tempMyNode2;
console.log(tempMyNode.left.getData());
tempMyNode.left.setData(8989889);
console.log(tempMyNode.left.getData());
console.log(tempMyNode2.getData());

class BinarySearchTree {
  // root of the tree
  // bst rules
  // left child is lesser then its parent
  // right child is greater then its parent

  // l(n) ::: complexity
  protected root: MyNode | null;
  constructor() {
    this.root = null;
  }

  getRoot(): MyNode | null | any {
    if (this.root === null) return null;
    return this.root;
  }
  //
  insertNumber(data: number): boolean {
    if (this.root === null) {
      this.root = new MyNode(data);
      return true;
    } else {
      const searchTree = (node: MyNode): boolean => {
        if (data < node.getData()) {
          if (node.left === null) {
            node.left = new MyNode(data);
            return true;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.getData()) {
          if (node.right === null) {
            node.right = new MyNode(data);
            return true;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        }
        return false;
        // if the data is the same with the
        // current node
      };
      return searchTree(this.root);
    }
  }
  hasNumberRec(findData: number): boolean {
    if (this.root === null) {
      return false;
    }
    const searchTree = (node: MyNode): boolean => {
      if (findData === node.getData()) return true;
      else if (findData < node.getData() && node.left !== null) {
        return searchTree(node.left);
      } else if (findData > node.getData() && node.right !== null) {
        return searchTree(node.right);
      } else {
        return false;
      }
    };
    return searchTree(this.root);
  }
  hasNumberLoop(findData: number): boolean {
    if (this.root === null) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode.getData() !== findData) {
      if (findData < currentNode.getData() && currentNode.left !== null) {
        currentNode = currentNode.left;
      } else if (
        findData > currentNode.getData() &&
        currentNode.right !== null
      ) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
    return currentNode.getData() === findData;
    return false;
  }
  hasNumberLoop2(findData: number): boolean {
    // if (this.root === null) return false;
    let currentNode: MyNode | null = this.root;
    while (currentNode) {
      // if the node null it will break the loop
      if (findData === currentNode.getData()) return true;
      else if (findData > currentNode.getData()) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return false;
  }
  findBasedOnNumberRec(findData: number): MyNode | null {
    if (this.root === null) return null;
    let currentNode: MyNode = this.root;
    const searchTree = (node: MyNode, data: number): MyNode | null => {
      if (node.getData() === data) {
        return node;
      } else if (data > node.getData() && node.right !== null) {
        return searchTree(node.right, data);
      } else if (data < node.getData() && node.left !== null) {
        return searchTree(node.left, data);
      } else {
        return null;
      }
    };
    return searchTree(currentNode, findData);
  }
  //
  findMinRec(): number | boolean {
    if (this.root === null) {
      return false;
    }
    const searchTree = (node: MyNode): number => {
      if (node.left === null) {
        return node.getData();
      }
      return searchTree(node.left);
    };
    return searchTree(this.root);
  }
  findMinLoop(): number | boolean {
    if (this.root === null) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode.left !== null) {
      currentNode = currentNode?.left;
    }
    return currentNode.getData();
  }
  findMaxRec(): number | boolean {
    if (this.root === null) {
      return false;
    }
    const searchTree = (node: MyNode): number => {
      if (node.right === null) {
        return node.getData();
      }
      return searchTree(node.right);
    };
    return searchTree(this.root);
  }
  findMaxLoop(): number | boolean {
    if (this.root === null) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.getData();
  }
  //
  removeNumber(findData: number): boolean {
    if (this.root === null) return false;
    // const searchTree = (node: Mynode): boolean => {
    //   if (findData === node.getData()) {
    //   }
    // };
    return false;
  }
}
const bst = new BinarySearchTree();
console.log(bst);
console.log(`root data : ${bst.getRoot()?.getData()}`);
bst.insertNumber(99999);
console.log(bst);
console.log(`root data : ${bst.getRoot()?.getData()}`);
bst.getRoot().left = new MyNode("LEFT CHILD OF ROOT");
bst.getRoot().right = new MyNode("RIGHT CHILD OF ROOT");
console.log(bst);
// testing recursive and more deep understanding
const testSearchArrRecursive = (
  array: Array<any>,
  findValue: any, //
  idx: number = 0
): boolean | number => {
  //
  if (idx > array.length - 1) {
    return false;
  }
  if (array[idx] === findValue) {
    return idx;
  } else {
    return testSearchArrRecursive(array, findValue, idx + 1);
  }
};
const addToLeftNode = (bst: BinarySearchTree) => {
  bst.getRoot().left = new MyNode(1111);
};
console.log(testSearchArrRecursive([1, 2, 3, 4, 5, 6], 4, 0));
const bst2 = new BinarySearchTree();
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
console.log(
  `root.left.data : ${bst2
    .getRoot()
    .left.getData()} : is exist : ${bst2.hasNumberRec(111)}`
);
console.log(
  `root.left.data (loop way) : ${bst2
    .getRoot()
    .left.getData()} : is exist : ${bst2.hasNumberLoop(111)}`
);
console.log(
  `root.right.data : ${bst2
    .getRoot()
    .right.getData()} : is exist : ${bst2.hasNumberRec(333333333333)}`
);
console.log(`far right ${bst2
  .getRoot()
  .right.right.right.getData()} exist : ${bst2.hasNumberRec(4444444444444444)}
`);
console.log(`far right (loop way) ${bst2
  .getRoot()
  .right.right.right.getData()} exist : ${bst2.hasNumberLoop(4444444444444444)}
`);
console.log(`min num in treee : ${bst2.findMinRec()}`);
console.log(`min num in treee (loop way) : ${bst2.findMinLoop()}`);
console.log(`max num in treee : ${bst2.findMaxRec()}`);
console.log(`max num in treee (loop way) : ${bst2.findMaxLoop()}`);
console.log(bst2.insertNumber(333333333333));
console.log(bst2.insertNumber(3));
console.log(bst2.getRoot());
console.log(`min num in treee : ${bst2.findMinRec()}`);
console.log(`min num in treee (loop way) : ${bst2.findMinLoop()}`);
console.log(
  `root.left.data (loop way) : ${bst2
    .getRoot()
    .left.getData()} : is exist : ${bst2.hasNumberLoop(111)}`
);
console.log(
  `root.left.data (loop way 2.0) : ${bst2
    .getRoot()
    .left.getData()} : is exist : ${bst2.hasNumberLoop2(111)}`
);
const bst3 = new BinarySearchTree();
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
const test = () => {
  if (1) return 1;
  if (1) return 2;
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
