var mergeTwoLists = function(list1, list2) {
    let node1 = list1;
    let node2 = list2;
    let next = null;

    //edge case if both nodes are empty
    if (node1 === 0 && node2 === 0) {
        return [];
    }

    while (node1) {
        let save1 = node1.next;
        let save2 = node2.next;

        
    }

};

mergeTwoLists([1,2,4], [1,3,4]);