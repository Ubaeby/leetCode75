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

//utilized floyd's cycle algorithm or tortoise hare method of searching.
//by creating a two pointers, we can loop through the node with our fast pointer searching further while slow pointer looks one at a time
//once finished, the solution should give us the middle of the linked list every time.
var middleNode = function(head) {
    let sPointer = head;
    let fPointer = head;
    
    while (fPointer !== null && fPointer.next !== null) {
        sPointer = sPointer.next;
        fPointer = fPointer.next.next;
    }

    return sPointer;
 };

middleNode([1,2,3,4,5]);