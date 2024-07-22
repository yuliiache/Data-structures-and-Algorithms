const {BinaryTree} = require('./BinaryTree');

const testBinaryTree = new BinaryTree();

testBinaryTree.insert(5);
testBinaryTree.insert(3);
testBinaryTree.insert(4);
testBinaryTree.insert(7);
testBinaryTree.insert(1);
testBinaryTree.insert(11);
testBinaryTree.insert(21);
testBinaryTree.insert(10);
// testBinaryTree.deleteIterable(1)
const result = testBinaryTree.inOrderTraversal(testBinaryTree.root);
console.log(result)
