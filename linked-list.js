class LinkedList {
  #head;

  constructor() {
    this.head = {
      next: null,
    };
  }

  append(node) {
    if (this.head.next === null) {
      this.head.next = node;
      return;
    }

    let tmp = this.head.next;
    while (tmp.next != null) {
      tmp = tmp.next;
    }
    if (tmp.next != null || tmp === null || typeof tmp != "object") return;

    tmp.next = node;
  }

  prepend(node) {
    if (this.head.next === null) {
      this.head.next = node;
      return;
    }

    const previousNext = this.head.next;
    this.head.next = node;
    node.next = previousNext;
  }

  getSize() {
    let size = 0;
    let tmp = this.head.next;
    while (tmp) {
      tmp = tmp.next;
      size++;
    }
    return size;
  }

  getHead() {
    return this.head.next;
  }

  getTail() {
    if (this.head.next === null) {
      return this.head;
    }

    let tmp = this.head.next;
    while (tmp.next != null) {
      tmp = tmp.next;
    }

    return tmp;
  }

  at(index) {
    let node = this.getHead();
    if (this.getSize() - 1 < index) return null;
    if (index === 0) return node;

    for (let i = 1; i <= index; i++) {
      node = node.next;
    }

    return node;
  } 

  pop() {
    if (this.getSize() === 0) return;
    if (this.getSize() === 1) {
      this.head.next = null;
      return;
    }

    this.at(this.getSize() - 2).next = null;
  }

  contains(value) {
    if (this.getSize() === 0) return false;
    let node = this.getHead();

    for (let i = 0; i < this.getSize(); i++) {
      if (node.value === value) return true;
      node = node.next;
    }

    return false;
  }

  find(value) {
    if (this.getSize() === 0) return null;
    let node = this.getHead();
    for (let i = 0; i < this.getSize(); i++) {
      if (node.value === value) return i;
      node = node.next;
    }

    return null;
  }

  get head() {
    return this.#head;
  }
  set head(node) {
    this.#head = node;
  }
}

export { LinkedList };
