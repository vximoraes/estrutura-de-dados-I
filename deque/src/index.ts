import { Deque } from "./Deque";

const deque = new Deque(7);

deque.addLast("A");
deque.addLast("B");
deque.addfirst("C");
deque.addfirst("D");
deque.addfirst("E");
deque.addfirst("F");
deque.addfirst("G");

deque.removeLast(); // Remove "B"
deque.removeLast(); // Remove "A"
deque.removeLast(); // Remove "C"
deque.removeFirst(); // Remove "G"

console.log(deque);