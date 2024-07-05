/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current = head
    let count  = 1
    while (current){
        current = current.next
        count++
    }
    const itemRemove = count-n
    if (count === 2){
        return null
    }
    if (itemRemove === 1){
        return head.next
    }
    count = 1
    current = head
    while (count < itemRemove-1){
        current = current.next
        count++
    }
    if (!current.next){
        
    }
    else if (current.next.next){
        current.next = current.next.next
    }
    else {
        current.next = null
    }
    return head
};