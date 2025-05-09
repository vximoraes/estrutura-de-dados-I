// Vinícius Almeida Moraes
// ADS 2024/3
// Estrutura de Dados I

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
        if (this.isFull()) throw new Error("Deque cheio!");
    
        if (this.inicio == this.fim) {
            this.fim = this.incrementar(this.fim);
        }

        this.arr[this.inicio] = item;
        this.inicio = this.decrementar(this.inicio);
        this.tamanho++;
    
        console.log("Inserido(início):", item);
    }

    addLast(item: T) {
        if(this.isFull()) throw new Error("Deque cheio!");

        this.arr[this.fim] = item;
        this.fim = this.incrementar(this.fim);
        this.tamanho++;

        console.log("Inserido(final):", item);
    }

    removeFirst(): T {
        if (this.isEmpty()) throw new Error("Deque vazio!");
    
        if (this.capacidade == this.tamanho) {
            this.fim = this.decrementar(this.fim)
        }

        const item = this.arr[this.inicio] as T;     
        this.inicio = this.incrementar(this.inicio); 
        this.arr[this.inicio] = null;
        this.tamanho--;
    
        return item;
    }
    
    removeLast(): T {
        if (this.isEmpty()) throw new Error("Deque vazio!");

        if (this.capacidade == this.tamanho) {
            this.fim = this.decrementar(this.fim)
        }

        this.fim = this.decrementar(this.fim);
        const item = this.arr[this.fim] as T;
        this.arr[this.fim] = null;
        this.tamanho--;

        return item;
    }

    peekFirst(): T {
        if (this.isEmpty()) throw new Error("Deque vazio!");

        this.inicio = this.incrementar(this.inicio); 
        const primeiro = this.arr[this.inicio] as T;

        console.log(primeiro);

        return primeiro;
    }

    peekLast(): T {
        if (this.isEmpty()) throw new Error("Deque vazio!");
        
        if (this.capacidade == this.tamanho) {
            this.fim = this.decrementar(this.fim)
        }

        this.fim = this.decrementar(this.fim)
        const ultimo = this.arr[this.fim] as T;

        console.log(ultimo);
        
        return ultimo;
    }

    size(): number {
        console.log(this.tamanho);
        return this.tamanho;
    }

    capacity(): number {
        console.log(this.capacidade);
        return this.capacidade;
    }
}