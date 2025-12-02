import { LinkedList } from "./linked-list.js";
import { NodeItem } from "./node.js";

const list = new LinkedList();
console.log("Inital List:");
console.log(list.head);
console.log("Inital size: " + list.getSize());

console.log("Contains on an empty List: " + list.contains("First"));
console.log("Find on empty: " + list.find("First"));
list.append(new NodeItem("First"));
console.log("Contains after only 1 item: " + list.contains("First"));
console.log("Find after only 1 item: " + list.find("First"));
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
console.log("First item in list: " + list.getHead().value);
console.log("Last item in list: " + list.getTail().value);

console.log("\nGetting the Node at specific index")
console.log("Index 0 value: " + list.at(0).value);
console.log("Index 4 value: " + list.at(4).value);
console.log("Index 2 value: " + list.at(2).value);
console.log("Out of bound value: " + list.at(5));

console.log("\nList contains certain value");
console.log("Contains First: " + list.contains("First"));
console.log("Contains Fifth (last item): " + list.contains("Fifth"));
console.log("Contains some random: " + list.contains("Random"));

console.log("\nFind index of searched value");
console.log("Find First value index: " + list.find("First"));
console.log("Find Fourth value index: " + list.find("Fourth"));
console.log("Find Fifth (last) index: " + list.find("Fifth"));
console.log("Find non-existent: " + list.find("None"));