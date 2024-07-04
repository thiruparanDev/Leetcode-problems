/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode()
    let current = dummy
    let carry = 0
    
    while (l1 || l2){
        let val = 0
        val += carry
        if (l1){
            val += l1.val
            l1 = l1.next
        }
        if (l2){
            val += l2.val
            l2 = l2.next
        }
        if (val>=10){
            carry =1
            val = val-10
        }
        else {
            carry = 0
        }
        current.next = new ListNode(val)
        current = current.next   
    }
    if (carry>0){
        current.next = new ListNode(carry)
    }
    return dummy.next
};