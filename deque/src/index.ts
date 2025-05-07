import { Deque } from "./Deque";

const deque = new Deque(7);

deque.addfirst("A");
deque.addLast("B");
deque.addLast("C");
deque.addLast("D");
deque.addLast("E");
deque.addLast("F");  // Removido (último)
deque.addfirst("G"); // Removido (primeiro)

deque.removeFirst(); 
deque.removeLast(); 

console.log(deque);

deque.peekFirst();
deque.peekLast();

deque.size();
deque.capacity();