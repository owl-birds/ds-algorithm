///
interface LinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  preppend(item: T): void;
  get(index: number): T | undefined;
}
///

class NodeSingle {
  value: any;
  next: NodeSingle | null;
  constructor(value: any, nextNode: NodeSingle | null = null) {
    this.value = value;
    this.next = nextNode;
  }
}
class Single_linked_list {
  protected head: NodeSingle | null;
  protected length: number;
  constructor(head: NodeSingle | null = null) {
    this.head = head;
    this.length = 0;
    if (this.head) this.length += 1;
  }
  get_head(): NodeSingle | null {
    return this.head;
  }
  size(): number {
    return this.length;
  }
  add(value: any): void {
    if (!this.head) {
      this.head = new NodeSingle(value);
      this.length = 1;
      return;
    }
    const newNode: NodeSingle = new NodeSingle(value);
    let tempNode: NodeSingle | null = this.head;
    while (tempNode) {
      if (tempNode.next === null) break; // when we at the last node
      tempNode = tempNode.next;
    }
    tempNode.next = newNode;
    this.length += 1;
  }
  add_at(index: number, value: any) {}
  remove(value: any): void {
    if (!this.head) return; // empty
    let tempNode: NodeSingle | null = this.head;
    while (tempNode) {
      if (tempNode.next && tempNode.next.value === value) {
        tempNode.next = tempNode.next.next;
        this.length -= 1;
        return;
      }
      tempNode = tempNode.next;
    }
  }
  remove_at(index: number) {}
  index_of(value: any): number {
    if (!this.head) return -1;
    let tempNode: NodeSingle | null = this.head;
    let index: number = 0;
    while (tempNode) {
      if (tempNode.value === value) return index;
      tempNode = tempNode.next;
      index += 1;
    }
    return -1;
  }
  value_at(index: number): any {
    if (!this.head || index > this.length - 1) return null;
    let tempNode: NodeSingle | null = this.head;
    let count_idx: number = 0;
    while (tempNode) {
      if (count_idx === index) return tempNode.value;
      count_idx += 1;
      tempNode = tempNode.next;
    }
  }
  // to check
  print(): void {
    let tempNode: NodeSingle | null = this.head;
    const arr: any[] = [];
    while (tempNode) {
      arr.push(tempNode.value);
      tempNode = tempNode.next;
    }
    console.log(arr);
  }
}
const linked_list_1: Single_linked_list = new Single_linked_list();
console.log(linked_list_1.size());
linked_list_1.add(9);
linked_list_1.add(9);
linked_list_1.add("ASDAS");
linked_list_1.add("ASDAS");
linked_list_1.add(8232);
console.log(linked_list_1.size());
linked_list_1.print();
linked_list_1.remove("ASDAS");
linked_list_1.print();
linked_list_1.remove("ASDASa");
linked_list_1.print();
console.log(linked_list_1.size());
console.log(linked_list_1.index_of(8232));
console.log(linked_list_1.value_at(6));
console.log(linked_list_1.value_at(3));
