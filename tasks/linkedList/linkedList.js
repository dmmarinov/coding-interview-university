/**
 * Initialize your data structure here.
 */
class Node {
  constructor(val) {
      this.next = null;
      this.val = val;
  }
}

class MyLinkedList {
  constructor() {
      this.head = null;
      this.length = 0;
  }
}

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1.
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  if (this.length < 0 || index >= this.length) {
    return -1;
  }

  let current = this.head;
  let count = 0;


  while (count < index) {
    current = current.next;
    count++;
  }

  return current.val;
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  const newHead = new Node(val);
  newHead.next = this.head;
  this.head = newHead;
  this.length++;
};

/**
* Append a node of value val to the last element of the linked list.
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new Node(val);

  if(this.length === 0) {
    this.head = node;
  } else {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new Node(val);
  }

  this.length++;
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
* @param {number} index
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0 || index > this.length) {
    return;
  }

  if (index === 0) {
    this.addAtHead(val);
  } else {
    const node = new Node(val);
    let current = this.head;
    let prev = null;
    let count = 0

    while (count < index) {
        prev = current;
        current = current.next;
        count++;
    }

    node.next = current;
    prev.next = node;
  }

  this.length++;
};

/**
* Delete the index-th node in the linked list, if the index is valid.
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.length) {
    return;
  }

  let current = this.head;

  if(index === 0) {
    this.head = current.next;
  } else {
    let prev = null;
    let count = 0;

    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }

    prev.next = current.next;
  }

  this.length--;
  return;
};

const myList = new MyLinkedList();
// const a = ["addAtHead","deleteAtIndex","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtTail","get","deleteAtIndex","deleteAtIndex"];
// const b = [[2],[1],[2],[7],[3],[2],[5],[5],[5],[6],[4]];

const a = ["addAtHead","get","addAtHead","addAtHead","deleteAtIndex","addAtHead","get","get","get","addAtHead","deleteAtIndex"]
const b = [[4],[1],[1],[5],[3],[7],[3],[3],[3],[1],[4]];

a.forEach((body, index) => {
  eval(`myList.${body}(${b[index]})`);
});
console.log(myList);