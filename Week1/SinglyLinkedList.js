class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let cur = this.head;

    while (cur.value !== value) {
      cur = cur.next;
      if (cur === null) break;
    }
    if (cur === null) {
      return "찾는 값이 없습니다.";
    } else {
      return cur;
    }
  }

  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, value) {
    const newNode = new Node(value);

    if (node === "찾는 값이 없습니다.") {
      console.log("넣으신 노드를 찾을 수 없습니다. append를 해주세요.");
      return;
    }

    newNode.next = node.next;

    node.next = newNode;
  }

  remove(value) {
    let preNode = this.head;
    while (preNode.next.value !== value) {
      preNode = preNode.next;
      if (preNode.next === null) break;
    }

    if (preNode.next === null) {
      console.log("해당 값이 없아 삭제할 수 없습니다.");
      return;
    }

    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
    }
  }

  dispaly() {
    let cur = this.head;
    let displayString = "[";
    while (cur !== null) {
      displayString += `${cur.value}, `;
      cur = cur.next;
    }

    displayString = displayString.substring(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }

  size() {
    let cnt = 0;
    let cur = this.head;
    while (cur !== null) {
      cur = cur.next;
      cnt++;
    }
    return cnt;
  }
}

const linkedList = new SinglyLinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.dispaly();

console.log(linkedList.find(3));

linkedList.remove(3);
linkedList.dispaly();

linkedList.insert(linkedList.find(2), 10);
linkedList.dispaly();

console.log(linkedList.size());

console.log(linkedList.find(3));

linkedList.insert(linkedList.find(3), 20);
linkedList.dispaly();

linkedList.remove(20);
linkedList.dispaly();
