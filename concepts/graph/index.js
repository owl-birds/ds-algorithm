// nodes/vertices
// edges :: connecting between nodes
// graph : Connection of things
// Directed Graphs : Internet, Webpage links,
// Undirected Graphs : Social Network,
// three way to represent graph
// 1. ADJACENCY List
// row and col : nodes/vertices
// a - b - c
// in text
// Node A: Node B
// Node B: Node A, Node C
// Node C: Node B
// associate the vertices with it neighbours
// in JS
// const undirected_graph = {
//  Node_A: ["Node_B"],   || [1],
//  Node_B: ["Node_A", "Node_C"],    || [0,2],
//  Node_C: ["Node_B"]    || [1],
// }
// Adjacency matrix
//    a    b   c
// a  0    1   0
// b  1    0   1
// c  0    1   0
// 0 : no edges 1 : there is edges :::: edges(relationship)
//
// example of directed graph in js array
var adj_matrix_directed = [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
];
// a <- b <- c
// 2. INCIDENCE MATRIX
// row : verticex/nodes
// col : edges(relationship)
// undirected
// a -(1) b -(2) c
//      1   2 ::: edges
// a    1   0
// b    1   1
// c    0   1
// nodes/vetices
// directed
// a <-(1) b <-(2) c
//      1   2 ::: edges
// a    1   0
// b   -1   1
// c    0  -1
// nodes/vetices
// -1 for directed
/// CODE
// GRAPH TRAVERSAL
// 1. Breadth First Search
var bfs_nodes_distance = function (adjacency_graph, root) {
    var result_distances = {};
    // {node : distance from the node}
    // initialize
    for (var i = 0; i < adjacency_graph.length; i += 1) {
        result_distances[i] = Infinity; // start the distance as Infinity
        // meaning at the start its not unreachable
    }
    result_distances[root] = 0; // cause its the node
    var queue = [root];
    // simple queue :: first in first out
    var current_node; // track the current node that we re traversing
    //
    while (queue.length !== 0) {
        current_node = queue.shift();
        var connected_node_to_root = adjacency_graph[current_node];
        var neighbour_idx = []; // neighbour nodes
        var idx = connected_node_to_root.indexOf(1);
        // first neighbour
        // finding the next neighbours
        while (idx !== -1) {
            neighbour_idx.push(idx);
            // below to find neighbpur after the first one
            // that why the re is idx + 1
            idx = connected_node_to_root.indexOf(1, idx + 1);
        }
        for (var i = 0; i < neighbour_idx.length; i += 1) {
            if (result_distances[neighbour_idx[i]] === Infinity) {
                result_distances[neighbour_idx[i]] = result_distances[current_node] + 1;
                queue.push(neighbour_idx[i]);
            }
        }
    }
    //
    return result_distances;
};
// 2. Depth First Search
// TEST
// nodes : [0,1,2,3,4]
// directed graph
var ex_bfs_graph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
];
console.log(bfs_nodes_distance(ex_bfs_graph, 4));
console.log(bfs_nodes_distance(ex_bfs_graph, 1));
