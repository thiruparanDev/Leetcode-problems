/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode();
    let current = dummy
    while (list1 || list2){
        if (list1 && list2){
            if (list1.val > list2.val){
                current.next = new ListNode(list2.val)
                current = current.next
                list2 = list2.next
            }
            else {
                current.next = new ListNode(list1.val)
                current = current.next
                list1 = list1.next
            }
        }
        else if (list1){
            current.next = list1
            return dummy.next
        }
        else if (list2){
            current.next = list2
            return dummy.next
        }
    }
    return dummy.next
};