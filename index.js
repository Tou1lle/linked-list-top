import { LinkedList } from "./linked-list.js";
import { NodeItem } from "./node.js";

const list = new LinkedList();
console.log("Inital List:");
console.log(list.head);
console.log("Inital size: " + list.getSize());

list.append(new NodeItem("First"));
list.append(new NodeItem("Second"));
list.append(new NodeItem("Third"));
list.prepend(new NodeItem("Fourth"));
list.append(new NodeItem("Fifth"));

console.log("\nList after appending");
console.log("1st item: " + list.head.next.value);
console.log("2nd item: " + list.head.next.next.value);
console.log("3rd item: " + list.head.next.next.next.value);
console.log("4th item: " + list.head.next.next.next.next.value);
console.log("5th item: " + list.head.next.next.next.next.next.value);
console.log("Size after 5 items: " + list.getSize());