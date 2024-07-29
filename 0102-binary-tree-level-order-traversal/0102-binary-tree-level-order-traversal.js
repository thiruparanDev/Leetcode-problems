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
var levelOrder = function(root) {
    if (root===null){
        return []
    }
    const arr = [root]
    const result = []
    while (arr.length>0){
        const currentLength = arr.length
        const currentLevel = []
        for (let i =0; i<currentLength; i++){
            const queue = arr.shift()
            if (queue.val!==null){
                currentLevel.push(queue.val)
            }
            if (queue.left!==null){
                arr.push(queue.left)
            }
            if (queue.right!==null){
                arr.push(queue.right)
            }
        }
        result.push(currentLevel)
    }
    return result
};