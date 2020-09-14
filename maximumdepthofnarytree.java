//Java Solution

class Solution {
    public int maxDepth(Node root) {
        return dfs(root);
    }
    
    public int dfs(Node node) {
        if (node == null) {
            return 0;
        }
        
        int depth = 0;
        for (Node child : node.children) {
            depth = Math.max(depth, dfs(child));
        }
        
        return depth + 1;
    }
}