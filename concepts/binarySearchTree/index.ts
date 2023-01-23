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
    } catch (error: any) {
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
    const removeNode = (node: MyNode, findData: number): MyNode | null => {
      if (node === null) return null;
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
        let tempNode = node.right;
        // we go to the right of the soon delted node
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        } // then we go the the most left from there
        node.setData(tempNode.getData());
        node.right = removeNode(node.right, tempNode.getData());
        return node;
      } else if (findData > node.getData() && node.right !== null) {
        node.right = removeNode(node.right, findData);
        return node;
      } else if (findData < node.getData() && node.left !== null) {
        node.left = removeNode(node.left, findData);
        return node;
      }
      return null;
    };
    this.root = removeNode(this.root, findData);
    return true;
  }
  // clean tree
  cleanTree(): boolean {
    if (this.root === null) return false;
    this.root = null;
    return true;
  }
  // bst height and traversal
  // a balanced tree if the difference between the min
  // height and the max heigth is at most 1 (<=1 difference)
  findMinHeight(node: MyNode | null = this.root): number {
    // find the first node that doesnt have two childrehm
    // the distance from the root node to the leaf node
    // without two children
    if (!node) return -1;
    let left: number = this.findMinHeight(node.left);
    let right: number = this.findMinHeight(node.right);
    if (left < right) return left + 1;
    else return right + 1;
  }
  findMaxHeight(node: MyNode | null = this.root): number {
    if (!node) return -1;
    let left: number = this.findMaxHeight(node.left);
    let right: number = this.findMaxHeight(node.right);
    if (left > right) return left + 1;
    else return right + 1;
  }
  isBalanced(node: MyNode | null = this.root): boolean {
    return this.findMaxHeight(node) - this.findMinHeight(node) <= 1;
  }
  // traversal
  // 1. in-order : begin on the most left node
  inOrder(): number[] | null {
    if (this.root === null) return null;
    const result: number[] = [];
    const traverseinOrder = (node: MyNode): void => {
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
  }
  // 2. pre-order : root node first
  preOrder(): number[] | null {
    if (this.root === null) return null;
    const result: number[] = [];
    const traversePreOrder = (node: MyNode): void => {
      result.push(node.getData());
      node.left && traversePreOrder(node.left);
      node.right && traversePreOrder(node.right);
    };
    traversePreOrder(this.root);
    return result;
  }
  // 3. post-order : leaf node first
  postOrder(): number[] | null {
    if (this.root === null) return null;
    const result: number[] = [];
    const traversePostOrder = (node: MyNode): void => {
      node.left && traversePostOrder(node.left);
      node.right && traversePostOrder(node.right);
      result.push(node.getData());
    };
    traversePostOrder(this.root);
    return result;
  }
  // 4. level-order (breadth-first-search) : explore the node in any given level in the tree before going to the next level
  // levelOrder(): number[] | null {
  levelOrder(): any[] | null {
    /// level order modified to take all the value
    /// from the tree // is it pre order ? i dont know
    /// its already modified : its still level order
    /// im dumb
    if (this.root === null) return null;
    // const result: number[] = [];
    const result: any[] = [];
    // const queue: MyNode[] = []; // temp array
    const queue: any[] = []; // temp array
    //
    queue.push(this.root);
    while (queue.length > 0) {
      // taking the first item off the queue
      let tempNode: MyNode | null = queue.shift()!; // queue always have values in this while loop
      // result.push(tempNode.getData());
      if (tempNode === null) result.push(null);
      else result.push(tempNode.getData());

      if (tempNode) {
        if (tempNode.left === null && tempNode.right === null) {
          continue;
        }
        queue.push(tempNode.left);
        queue.push(tempNode.right);
      }

      // if (tempNode.left !== null) {
      //   queue.push(tempNode.left);
      // }
      // if (tempNode.right !== null) {
      //   queue.push(tempNode.right);
      // }
    }
    return result;
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
console.log(bst3.preOrder());
console.log(bst3.postOrder());
// console.log(bst3.cleanTree());
// console.log(bst3.inOrder());
const bst4: BinarySearchTree = new BinarySearchTree();
bst4.insertNumber(9);
bst4.insertNumber(4);
bst4.insertNumber(17);
bst4.insertNumber(3);
bst4.insertNumber(6);
bst4.insertNumber(22);
bst4.insertNumber(5);
bst4.insertNumber(20);
console.log(bst4.inOrder());
console.log(bst4.preOrder());
console.log(bst4.postOrder());
console.log(bst4.levelOrder());

const bst5: BinarySearchTree = new BinarySearchTree();
bst5.insertNumber(4);
bst5.insertNumber(2);
bst5.insertNumber(6);
bst5.insertNumber(5);
bst5.insertNumber(3);
console.log(bst5.preOrder());
console.log(bst5.levelOrder());
