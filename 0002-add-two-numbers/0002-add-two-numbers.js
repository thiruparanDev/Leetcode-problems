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
    let dummy = new ListNode();
    let current = dummy;
    let carry = 0;
    
    
    while (l1||l2){
        let x = carry
        if (l1){
            x += l1.val
            l1 = l1.next
        }
        if (l2){
            x += l2.val
            l2 = l2.next
        }
        if (x>=10){
        carry =1
        x = x-10
        }
        else {
            carry = 0
        }
        current.next = new ListNode(x);
        current = current.next

        
    }
    if (carry !== 0){
        current.next = new ListNode(carry);
    }
    return dummy.next
};