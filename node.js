class NodeItem {
  #value;
  #next
  
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get value() {
    return this.#value;
  }

  get next() {
    return this.#next;
  }

  set value(value) {
    this.#value = value;
  }

  set next(next) {
    this.#next = next;
  }
}

export { NodeItem };