## Arrays vs Linked List

Array

- fixed size

linked list

- growable

HINT : Visualize Array and Linked List

1. usablity
2. Time
3. space

## ARRAY LIST

can we have an array access with the ability to grow?

yes u can do it

0 -> 3

[ 2,... ]

length: 1

Container: 3

get(idx)

if idx >= len

throw ...

push(val: T) -->> constant runtime

pop() : T | undefined

but what happen when we push but the capacity is already full

- create a new array: then increase the capacity (growing operation)

...

insert at ---> O(n) cause we need to shift

enque --> O(n)

deque --> O(n)

# ARRAY BUFFER ---> RING BUFFER

so in typical arrayList, the head will be zero
and the tail will be the length

but in array buffer the head and tail is not zero/ar some index (h) and the tail is not the length but less then the length

so its like a cycle,

![](/3concepts/in_js/concepts/array-vs-linkedList/array_buffer_1.png)
![](/3concepts/in_js/concepts/array-vs-linkedList/array_buffer_2.png)

but what will happen when we resize, the head is exceed the tail
