class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new TreeNode(data);

    if (this.root === null) {
      this.root = newNode;
      return;
    }
    const insertNode = (node, newNode) => {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right == null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    };

    insertNode(this.root, newNode);
  }

  deleteIterable(data) {
    let current = this.root;
    let parent = null;

    while (current !== null) {
      console.log(`Visiting node ${current.data}`)
      if (data < current.data) {
        parent = current;
        current = current.left;
      } else if (data > current.data) {
        parent = current;
        current = current.right;
      } else {
        // Node to be deleted found
        console.log(`Node to be deleted found ${current.data}`)

        // Case if node has no children
        if (current.left === null && current.right === null) {
          console.log(`Current data ${current.data} is a leaf node`)
          if (current === this.root) {
            this.root = null;
          } else if (parent.left === current) {
            parent.left = null;
          } else {
            parent.right = null;
          }

        // Case if node has child on the left
        } else if (current.right === null) {
          console.log(`Current data ${current.data} has child on the left`)
          if (current === this.root) {
            this.root = current.left;
          } else if (parent.left === current) {
            parent.left = current.left;
          } else {
            parent.right = current.left;
          }

        // Case if node has child on the right
        } else if (current.left === null) {
          console.log(`Current data ${current.data} has child on the right`)
          if (current === this.root) {
            this.root = current.right;
          } else if (parent.left === current) {
            parent.left = current.right;
          } else {
            parent.right = current.right;
          }

        // Case if node has both children
        } else {
          console.log(`Current data ${current.data} has has both children`)
          let successorParent = current;
          let successor = current.right;
          while (successor !== null) {
            successorParent = successor;
            successor = successor.left;
          }
          console.log(`successor found ${successor.data}`)
          current.data = successor.data;
          if (successorParent.left === successor) {
            successorParent.left = successor.right;
          } else {
            successorParent.left = successor.right;
          }
        }
        return;
      }
    }
  }

  inOrderTraversal (node, result = []) {
    if (node !== null) {
      console.log(`Traversing to the left child of node ${node.data}`)
      this.inOrderTraversal(node.left, result);
      console.log(`Visiting node ${node.data}`)
      result.push(node.data);
      console.log(`Traversing to the right child of node ${node.data}`)
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  preOrderTraversal (node, result = []) {

  }
}

module.exports = {BinaryTree, TreeNode};