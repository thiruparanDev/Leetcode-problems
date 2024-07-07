/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
    const dummy = new ListNode(0)
    let current = dummy
    while (head !== null){
        let val = 0
        val = 2*head.val
        if (val>=10){
            current.next = new ListNode(val-10)
            current.val = current.val+1
        }
        else {
            current.next = new ListNode(val)
        }
        current = current.next
        head = head.next
    }
    if (dummy.val ===0){
        return dummy.next
    }
    else {
        return dummy
    }
};
