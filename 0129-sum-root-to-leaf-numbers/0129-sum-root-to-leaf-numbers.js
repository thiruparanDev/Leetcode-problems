/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    const dfs = (node,currentNumber)=>{
        if (!node){
            return 0
        }
        currentNumber = currentNumber*10+node.val
        if (!node.left && !node.right){
            return currentNumber
        }
        const leftSum = dfs(node.left,currentNumber)
        const rightSum = dfs(node.right, currentNumber)
        return rightSum+leftSum
    }
    return dfs(root,0)
};