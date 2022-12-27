var NodeSingle = /** @class */ (function () {
    function NodeSingle(value, nextNode) {
        if (nextNode === void 0) { nextNode = null; }
        this.value = value;
        this.next = nextNode;
    }
    return NodeSingle;
}());
var Single_linked_list = /** @class */ (function () {
    function Single_linked_list(head) {
        if (head === void 0) { head = null; }
        this.head = head;
        this.length = 0;
        if (this.head)
            this.length += 1;
    }
    Single_linked_list.prototype.get_head = function () {
        return this.head;
    };
    Single_linked_list.prototype.size = function () {
        return this.length;
    };
    Single_linked_list.prototype.add = function (value) {
        if (!this.head) {
            this.head = new NodeSingle(value);
            this.length = 1;
            return;
        }
        var newNode = new NodeSingle(value);
        var tempNode = this.head;
        while (tempNode) {
            if (tempNode.next === null)
                break; // when we at the last node
            tempNode = tempNode.next;
        }
        tempNode.next = newNode;
        this.length += 1;
    };
    Single_linked_list.prototype.add_at = function (index, value) { };
    Single_linked_list.prototype.remove = function (value) {
        if (!this.head)
            return; // empty
        var tempNode = this.head;
        while (tempNode) {
            if (tempNode.next && tempNode.next.value === value) {
                tempNode.next = tempNode.next.next;
                this.length -= 1;
                return;
            }
            tempNode = tempNode.next;
        }
    };
    Single_linked_list.prototype.remove_at = function (index) { };
    Single_linked_list.prototype.index_of = function (value) {
        if (!this.head)
            return -1;
        var tempNode = this.head;
        var index = 0;
        while (tempNode) {
            if (tempNode.value === value)
                return index;
            tempNode = tempNode.next;
            index += 1;
        }
        return -1;
    };
    Single_linked_list.prototype.value_at = function (index) {
        if (!this.head || index > this.length - 1)
            return null;
        var tempNode = this.head;
        var count_idx = 0;
        while (tempNode) {
            if (count_idx === index)
                return tempNode.value;
            count_idx += 1;
            tempNode = tempNode.next;
        }
    };
    // to check
    Single_linked_list.prototype.print = function () {
        var tempNode = this.head;
        var arr = [];
        while (tempNode) {
            arr.push(tempNode.value);
            tempNode = tempNode.next;
        }
        console.log(arr);
    };
    return Single_linked_list;
}());
var linked_list_1 = new Single_linked_list();
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
