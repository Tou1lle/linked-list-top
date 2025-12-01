import { LinkedList } from "./linked-list.js";
import { NodeItem } from "./node.js";

const list = new LinkedList();
console.log("Inital List:");
console.log(list.head);

list.append(new NodeItem("First"));
list.append(new NodeItem("Second"));
list.append(new NodeItem("Third"));

console.log("\nList after appending");
console.log(list.head);