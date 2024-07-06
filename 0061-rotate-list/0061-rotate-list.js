/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // let final = head
    // let current = final
    // for (let i=1; i<=k; i++){
    //     if (!final || !final.next){
    //         return final
    //     }
    //     let dummy = null
    //     while (current.next !== null){
    //         dummy = current
    //         current = current.next
    //     }
    //     dummy.next = null
    //     current.next = final
    //     final = current
    // }
    // return final
    
    let dummy = head
    let current = dummy
    let count = 1
    if (!current || !current.next){
        return current
    }
    while (current.next !== null){
        // dummy = current
        current = current.next
        count++;
    }
    current = dummy
    let move = k%count
    count = count-move
    for (let i=1; i<count; i++){
        current = current.next
    }
    let final = current.next
    current.next = null
    finalCopy = final
    if (final === null){
        return dummy
    }
    while (finalCopy.next!==null){
        finalCopy = finalCopy.next
    }
    finalCopy.next = dummy
    return final
};