var mergeTwoLists = function(list1, list2) {
    let node1 = list1;
    let node2 = list2;

   if (!node1) return node2
   else if (!node2) return node1;
   else if (node1.val <= node2.val) {
    node1.next = mergeTwoLists(node1.next, node2)
    return node1;
   } else {
    node2.next = mergeTwoLists(node1, node2.next)
    return node2;
   }
};

console.log(mergeTwoLists([1,2,4], [1,3,4]));