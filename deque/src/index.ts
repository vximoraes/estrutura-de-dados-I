import { Deque } from "./Deque";

const deque = new Deque(7);

deque.addfirst("A");
deque.addfirst("B");
deque.addLast("C");
deque.addLast("D");
deque.addfirst("E");
deque.addLast("F");  
deque.addfirst("G");

console.log(deque);

deque.removeFirst(); 
deque.removeLast(); 

console.log(deque);

deque.peekFirst();
deque.peekLast();

deque.size();
deque.capacity();