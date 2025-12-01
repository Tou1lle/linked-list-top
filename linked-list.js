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

  get head() {
    return this.#head;
  }
  set head(node) {
    this.#head = node;
  }
}

export { LinkedList };
