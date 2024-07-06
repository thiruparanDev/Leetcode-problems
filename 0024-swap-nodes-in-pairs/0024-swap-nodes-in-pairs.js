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
var swapPairs = function(head) {
    let current  = head
    const final = new ListNode()
    let finalDummy = final
    while (current){
        if (current.next){
            let dummy = current.next.next
            let dummy2 = current.next
            current.next = dummy
            dummy2.next = current
            finalDummy.next = dummy2
            finalDummy = finalDummy.next.next
            current = dummy2.next.next
        }
        else {
            finalDummy.next = current
            current = current.next
        }

    }
    return final.next
};