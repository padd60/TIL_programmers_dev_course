class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  findStartingHead(value) {
    let current = this.head;
    while (current.next) {
      if (current.data == value) return true;
      current = current.next;
    }
    return false;
  }

  findStartingTail(value) {
    let current = this.tail;
    while (current.prev) {
      if (current.data == value) return true;
      current = current.prev;
    }
    return false;
  }

  addFront(value) {
    //if list is empty
    if (this.isEmpty()) {
      this.head = new LinkedListNode(value);
      this.tail = this.head;
    } else {
      let tmp = new LinkedListNode(value);
      tmp.next = this.head;
      this.head.prev = tmp;
      this.head = tmp;
    }
    this.size++;
  }

  addBack(value) {
    //if list is empty
    if (this.isEmpty()) {
      this.tail = new LinkedListNode(value);
      this.head = this.tail;
    } else {
      let tmp = new LinkedListNode(value);
      tmp.prev = this.tail;
      this.tail.next = tmp;
      this.tail = tmp;
    }
    this.size++;
  }

  removeHead() {
    if (this.isEmpty()) return null;

    let data = this.head.data;

    //if head(=tail) is target
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return data;
  }

  removeTail() {
    if (this.isEmpty()) return null;

    let data = this.tail.data;

    //if head(=tail) is target
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return data;
  }

  removeByValue(value) {
    let current = this.head; //Using tail instead of head also works.

    //if head is target
    if (current.data == value) {
      this.head = current.next;
      this.size--;
    } else {
      let prev = current;
      while (current.next) {
        if (current.data == value) {
          prev.next = current.next;
          current = current.next;
          break;
        }
        prev = current;
        current = current.next;
      }

      if (current.data == value) prev.next = null;
      this.size--;
    }
  }

  print() {
    let result = "";
    let current = this.head;
    while (current.next) {
      result += `${current.data} -> `;
      current = current.next;
    }
    result += current.data;
    console.log(result);
  }
}

const linkedList = new DoublyLinkedList();

for (let i = 1; i <= 5; i++) linkedList.addFront(i);
linkedList.print(); //5->4->3->2->1
linkedList.removeHead();
linkedList.print(); //4->3->2->1
linkedList.removeTail();
linkedList.print(); //4->3->2
linkedList.removeByValue(3);
linkedList.print(); //4->2
linkedList.addBack(1);
linkedList.print(); //4->2->1
console.log(linkedList.findStartingHead(1));
console.log(linkedList.findStartingTail(4));
linkedList.print();
