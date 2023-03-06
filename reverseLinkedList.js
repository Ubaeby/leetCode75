var reverseList = function(head) {
    let node = head;
    let previous = null;

    if (node === 0) {
        return [];
    }

    while(node) {
        let save = node.next;
        node.next = previous;
        previous = node;
        node = save;
    }
    return previous;
};

console.log(reverseList([1,2,3,4,5]))