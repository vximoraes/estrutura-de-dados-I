import { Deque } from "./Deque";

const deque = new Deque(5);

for(let i = 5; i >= 0; i--) {
    console.log("Inserido A");
    deque.enqueue("A");
    console.log("Inserido B");
    deque.enqueue("B");
    console.log("Inserido C");
    deque.enqueue("C");

    console.log("Removido:", deque.dequeue());
    console.log("Removido:", deque.dequeue());
    console.log("Removido:", deque.dequeue());
}