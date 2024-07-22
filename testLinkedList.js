const LinkedList = require('./LinkedList');

const testLinkedList = new LinkedList();

testLinkedList.append(1);
testLinkedList.append(3);
testLinkedList.prepend(0);
testLinkedList.append(7);
testLinkedList.append(1);
testLinkedList.search(3)
testLinkedList.remove(1)
testLinkedList.printAll();