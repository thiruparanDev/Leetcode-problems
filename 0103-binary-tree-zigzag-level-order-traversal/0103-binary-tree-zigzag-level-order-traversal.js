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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root){
        return []
    }
    const result = []
    const queue = [root]
    while(queue.length>0){
        const currentLength = queue.length
        const currentLevel = []
        for (let i=0;i<currentLength; i++){
            const node = queue.shift()
            if(result.length%2==0){
                currentLevel.push(node.val)
            }
            else {
                currentLevel.unshift(node.val)
            }
            if (node.left!==null){
                queue.push(node.left)
            }
            if (node.right!==null){
                queue.push(node.right)
            }
        }
        result.push(currentLevel)
    }
    return result
};