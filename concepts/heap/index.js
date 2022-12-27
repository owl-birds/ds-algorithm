// heap
// left child : i * 2
// right child : i * 2 + 1
// parent : i / 2 :: need to floor it
// GREAT VISUALIZATIOn
// https://www.cs.usfca.edu/~galles/visualization/Heap.html
// [ , 1 , 2 , 3 , 4 , 5 , 6 ]
var parent_idx = function (idx) {
    return Math.floor(idx / 2);
};
var left_child_idx = function (idx) {
    return idx * 2;
};
var right_child_idx = function (idx) {
    return idx * 2 + 1;
};
// Max_heap ::: the opposite of the Min_heap
// in the max the root is the maximum
// remove_max
var Min_heap = /** @class */ (function () {
    function Min_heap() {
        this.heap = new Array(1);
    }
    Min_heap.prototype.insert = function (input) {
        this.heap.push(input);
        if (this.heap.length > 2) {
            var new_idx = this.heap.length - 1;
            var is_bigger = false;
            while (!is_bigger) {
                if (new_idx === 1)
                    break;
                var par_idx = parent_idx(new_idx);
                if (this.heap[par_idx] <= this.heap[new_idx]) {
                    is_bigger = true;
                    continue;
                }
                var temp_value = this.heap[new_idx];
                this.heap[new_idx] = this.heap[par_idx];
                this.heap[par_idx] = temp_value;
                new_idx = par_idx;
            }
        }
    };
    Min_heap.prototype.remove_smallest = function () {
        if (this.heap.length <= 1)
            return;
        if (this.heap.length === 2) {
            return this.heap.pop();
        }
        var temp_value = this.heap.pop();
        var smallest = this.heap[1];
        //
        this.heap[1] = temp_value;
        var curr_idx = 1;
        var is_bigger = true;
        while (is_bigger) {
            var lci = left_child_idx(curr_idx);
            var rci = right_child_idx(curr_idx);
            if ((this.heap[curr_idx] <= this.heap[lci] &&
                this.heap[curr_idx] <= this.heap[rci]) ||
                (!this.heap[lci] && !this.heap[rci]) ||
                (!this.heap[lci] && this.heap[curr_idx] <= this.heap[rci]) ||
                (!this.heap[rci] && this.heap[curr_idx] <= this.heap[lci])) {
                is_bigger = false;
                break;
            }
            if (this.heap[curr_idx] > this.heap[lci] &&
                this.heap[curr_idx] > this.heap[rci]) {
                if (this.heap[lci] > this.heap[rci]) {
                    temp_value = this.heap[curr_idx];
                    this.heap[curr_idx] = this.heap[rci];
                    this.heap[rci] = temp_value;
                    curr_idx = rci; // in the Max_heap it will be the left
                    // lci in the max heap (max_heap MAX REMEMBER)
                    continue;
                }
                if (this.heap[lci] <= this.heap[rci]) {
                    temp_value = this.heap[curr_idx];
                    this.heap[curr_idx] = this.heap[lci];
                    this.heap[lci] = temp_value;
                    curr_idx = lci;
                    continue;
                }
            }
            if (this.heap[curr_idx] > this.heap[lci]) {
                temp_value = this.heap[curr_idx];
                this.heap[curr_idx] = this.heap[lci];
                this.heap[lci] = temp_value;
                curr_idx = lci;
                continue;
            }
            if (this.heap[curr_idx] > this.heap[rci]) {
                temp_value = this.heap[curr_idx];
                this.heap[curr_idx] = this.heap[rci];
                this.heap[rci] = temp_value;
                curr_idx = rci;
                continue;
            }
        }
        return smallest;
    };
    Min_heap.prototype.sort = function () {
        var result = [];
        while (this.heap.length > 1) {
            result.push(this.remove_smallest());
        }
        return result;
    };
    // test
    Min_heap.prototype.print = function () {
        console.log(this.heap);
    };
    return Min_heap;
}());
var min_heap1 = new Min_heap();
min_heap1.insert(3);
min_heap1.insert(10);
min_heap1.insert(5);
min_heap1.insert(6);
min_heap1.insert(4);
min_heap1.insert(16);
min_heap1.insert(0);
min_heap1.print();
min_heap1.remove_smallest();
min_heap1.print();
min_heap1.remove_smallest();
min_heap1.print();
min_heap1.remove_smallest();
min_heap1.print();
min_heap1.remove_smallest();
min_heap1.print();
min_heap1.remove_smallest();
min_heap1.print();
min_heap1.remove_smallest();
min_heap1.print();
min_heap1.remove_smallest();
min_heap1.print();
//
console.log("WWWWWWWWWWWWWWWWWWW");
console.log(min_heap1.sort());
//
min_heap1.insert(1);
min_heap1.insert(1);
min_heap1.insert(1);
min_heap1.insert(23);
min_heap1.insert(44);
min_heap1.insert(6);
min_heap1.insert(110);
min_heap1.insert(6);
min_heap1.insert(4);
min_heap1.insert(16);
min_heap1.insert(0);
min_heap1.print();
min_heap1.remove_smallest();
min_heap1.print();
min_heap1.remove_smallest();
min_heap1.print();
console.log(min_heap1.sort());
