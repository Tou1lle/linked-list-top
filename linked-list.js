class LinkedList {
  #head;

  constructor() {
    this.head = {
      next: null,
    };
  }

  get head() { return this.#head };
  set head(node) { this.#head = node };
}

export { LinkedList };