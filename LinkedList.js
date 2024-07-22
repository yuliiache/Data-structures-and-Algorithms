class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if(!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  remove(data) {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      if (current.data === data) {
        previous.next = current.next;
        current = current.next;
      } else {
        previous = current;
        current = current.next;
      }
    }
  }

  search(searchedData) {
    let current = this.head;
    while (current !== null) {
      if(current.data === searchedData) {
        console.log(`${searchedData} was found`)
        return current;
      }
      current = current.next;
    }

    console.log(`${searchedData} was not found`);
    return null;
  }

  printAll() {
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

module.exports = LinkedList;