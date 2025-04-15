import { Fila } from "./classes/Fila"

let fila = new Fila(5)

for (let i = 5; i >= 0; i--) {
    console.log("Inserindo...");

    fila.enqueue("A")
    fila.enqueue("B")
    fila.enqueue("C")
    fila.enqueue("D")
    fila.enqueue("E")

    console.log("Removendo...");
    
    console.log("Removido:", fila.dequeue());
    console.log("Removido:", fila.dequeue());
    console.log("Removido:", fila.dequeue());
    console.log("Removido:", fila.dequeue());
    console.log("Removido:", fila.dequeue());
}

console.table(fila);