class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return false;
  }

  delete(value) {
    let currentNode = this.root;

    let parentNode = null;

    while (currentNode.value !== value) {
      if (currentNode.left === null || currentNode.right === null)
        return "삭제 할 값이 없습니다.";
      if (currentNode.value < value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
    }

    let findNode = currentNode;

    console.log(findNode);
    console.log(parentNode);

    // 지금부터 currentNode는 삭제할 노드
    // 삭제 노드 말단에 서브트리 없을 경우
    if (currentNode.left === null && currentNode.right === null) {
      currentNode = null;
      return "서브트리 없는 노드 삭제 완료";
    }

    // 삭제 노드 서브트리 두개 전부 존재할 경우
    if (currentNode.left !== null && currentNode.right !== null) {
      let max = Number.MIN_SAFE_INTEGER;
      const temp = currentNode;
      currentNode = null;
      currentNode = temp.left;
      while (currentNode.left !== null) {
        if (currentNode.value > max) max = currentNode.value;
        findNode.value = currentNode.value;
      }
      currentNode = null;
      return "두개 서브트리 가지는 노드 삭제 완료";
    }

    if (currentNode.left !== null || currentNode.right !== null) {
      if (currentNode.left !== null) {
        const temp = currentNode.left;
        currentNode = null;
        parentNode.left = temp;
        return "한개 서브트리 가지는 노드 삭제 완료";
      }

      if (currentNode.right !== null) {
        const temp = currentNode.right;
        currentNode = null;
        parentNode.right = temp;
        return "한개 서브트리 가지는 노드 삭제 완료";
      }
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(9);
tree.insert(5);
tree.insert(6);
tree.insert(2);

console.log(tree.root.right.right);

console.log(tree.has(8));
console.log(tree.has(1));

console.log(tree.delete(42));
console.log(tree.delete(5));
console.log(tree.delete(8));
