//Objective is to find the maximum height of an n-ary tree.

class Node {
    constructor(val) {
        this.val = val
        this.children = []
    }
}

class nTree {
    constructor(root) {
        this.root = root 
    }
}

let root = new Node(1)
root.children = [new Node(2), new Node(3), new Node(4), new Node(5)]
root.children[1].children = [new Node(6), new Node(7)]
root.children[1].children[1].children = [new Node(11)]
root.children[1].children[1].children[0].children = [new Node(14)]
root.children[2].children = [new Node(8)]
root.children[2].children[0].children = [new Node(12)]
root.children[3].children = [new Node(9), new Node(10)]
root.children[3].children[0].children = [new Node(13)]


//O(n) solution that adds one to the depth every time a new stack is created
function maxDepth(root) {
    if (root == null) {
        return 0
    }
    
    let depth = 0
    
    for (let child of root.children) {
        depth = Math.max(depth, maxDepth(child))
    }

    //Adds +1 to depth every time a new level is reached
    return depth + 1
}

return maxDepth(root)
