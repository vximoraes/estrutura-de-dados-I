export class Fila {
    capacidade: number
    inicio: number
    fim: number
    arr: (string | null)[]
    
    constructor(capacidade: number) {
        this.capacidade = capacidade
        this.inicio = 0
        this.fim = 0
        this.arr = new Array(this.capacidade)
    }

    private incrementar(cont: number) {
        return (cont + 1) % this.capacidade
    }

    enqueue(valor: string) {
        this.arr[this.fim] = valor
        this.fim = this.incrementar(this.fim)

        console.log(this.arr)
    }

    dequeue(): string | null {
        let temp = this.arr[this.inicio]

        if(temp == null) throw new Error("Fila vazia...")

        console.log(this.arr)

        this.arr[this.inicio] = null
        this.inicio = this.incrementar(this.inicio)

        return temp
    }
}