# Floyd’s Cycle-Finding Algorithm

sources: https://medium.com/@simrangarg0501/finding-the-duplicate-number-using-floyds-tortoise-and-hare-algorithm-618ced80e98e

https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/

// well i just copy everything AAHAHAHAHAHAHA

Tortoise and Hare algorithm, or commonly known as Floyd's cycle detection algorithm is a pointer algorithm that use two pointers, which move through the sequence at different pace.

one of the most use application of it is to detect a loop or cycle in linked list.

![](/3concepts/in_js/algorithm/floyd_turtoise_hare_slow_fast/illustration.webp)

there are two possibilities, there is a cycle or not

Assuming there is a hare and a tortoise at the beginning and the hare moves 2 steps at one time while the tortoise moves 1 step. If there is a cycle in the sequence, they both will meet finally at some point. Or if there’s no such a cycle, they will both reach the end.

![](/3concepts/in_js/algorithm/floyd_turtoise_hare_slow_fast/illustration2.webp)

Initially, the hare and tortoise are at the start of the sequence. The hare moves 2 steps at a time while the tortoise moves 1 step. Assuming they meet after k iterations, the length of the non-cyclic part is x, circumference of the cycle is p, and the distance between the beginning of the cycle to the place they meet is y, we have:

- k = x + a \* p + y. a is a non-negative integer representing the number of loops that tortoise traveled, and k is the distance that the tortoise moved.
- 2 \* k = x + b \* p + y. b is another non-negative integer representing the number of loops that hare traveled, and 2 \* k is the distance that the hare moved.

On solving the above two equations, we get: k = (b — a) \* p

Now we put the hare back to the beginning and both hare and tortoise move 1 step at a time.

The place where they meet is the start of the cycle. This is because when the hare travelled another x, the tortoise is at the k + x = (b — a) \* p + x.

```c
int findDuplicateNum(vector<int>& Arr) {

        int slow = Arr[0];
        int fast = Arr[0];
        do {
            slow = Arr[slow];
            fast = Arr[Arr[fast]];
        }while(slow != fast);

        fast = Arr[0];
        while(slow != fast) {
            slow = Arr[slow];
            fast = Arr[fast];
        }
        return fast;

    }

```

![](/3concepts/in_js/algorithm/floyd_turtoise_hare_slow_fast/Detect-loop-in-a-linked-list.png)
