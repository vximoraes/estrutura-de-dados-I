export class Deque<T> {
    capacidade: number;
    inicio: number;
    fim: number;
    arr: (T | null)[];
    tamanho: number;

    constructor(capacidade: number) {
        this.capacidade = capacidade;
        this.inicio = 0;
        this.fim = 0;
        this.arr = new Array(this.capacidade);
        this.tamanho = 0;
    }

    private incrementar(cont: number) {
        return (cont + 1) % this.capacidade;
    }

    private decrementar(cont: number) {
        return (cont - 1 + this.capacidade) % this.capacidade;
    }

    isFull(): boolean {
        return this.tamanho === this.capacidade;
    }

    isEmpty(): boolean {
        return this.tamanho === 0;
    }

    addfirst(item: T) {
        if (this.isFull()) {
            throw new Error("Deque está cheio! Não é possível inserir:");
        }
    
        this.arr[this.inicio] = item;

        this.inicio = this.decrementar(this.inicio);
        
        this.tamanho++;
    
        console.log("Inserido(início):", item);
    }

    addLast(item: T) {
        if(this.isFull()) {
            throw new Error("Deque está cheio! Não é possível inserir:");
        }

        this.fim = this.incrementar(this.fim);
        
        this.arr[this.fim] = item;

        this.tamanho++;

        console.log("Inserido(final):", item);
    }

    removeFirst(): T {
        if (this.isEmpty()) {
            throw new Error("Deque está vazio!");
        }
        const removido = this.arr[this.inicio];

        this.arr[this.inicio] = null;

        this.inicio = this.incrementar(this.inicio);
        this.tamanho--;

        if (this.tamanho === 0) {
            this.inicio = 0;
            this.fim = 0;
        }
        console.log("Removido(início):", removido);
        return removido as T;
    }

    removeLast(): T {
        if (this.isEmpty()) {
            throw new Error("Deque está vazio!");
        }

        this.fim = this.decrementar(this.fim);
        const removido = this.arr[this.fim];
        this.arr[this.fim] = null;
        this.tamanho--;

        if (this.tamanho === 0) {
            this.inicio = 0;
            this.fim = 0;
        }
        console.log("Removido(final):", removido);
        return removido as T;
    }

    // -------------------------------------------------------

    enqueue(valor: T) {
        if (this.isFull()) {
            console.log("Erro: Deque está cheio! Não é possível inserir:", valor);
            return;

        }
        this.arr[this.fim] = valor;
        this.fim = this.incrementar(this.fim);

        this.tamanho++;
    }

    dequeue(): T | null {
        if (this.tamanho === 0) {
            throw new Error("Fila Vazia!");
        }

        const pos = this.inicio;
        this.inicio = this.incrementar(this.inicio);

        const temp = this.arr[pos];
        this.arr[pos] = null;

        this.tamanho--;

        return temp;
    }
}