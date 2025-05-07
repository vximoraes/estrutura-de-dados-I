import { describe, expect, test } from "@jest/globals";
import { Deque } from "../src/Deque";

describe("Deque<T>", () => {
    let deque: Deque<string>;

    beforeEach(() => {
        deque = new Deque(7);
    });

    test("deve adicionar elementos no início e no final do deque", () => {
        deque.addfirst("A");
        deque.addLast("B");
        deque.addLast("C");

        expect(deque.peekFirst()).toBe("A");
        expect(deque.peekLast()).toBe("C");
        expect(deque.size()).toBe(3);
    });

    test("deve remover elementos do início e do final do deque", () => {
        deque.addfirst("A");
        deque.addLast("B");
        deque.addLast("C");
    
        deque.removeFirst();
        deque.removeLast();
    
        expect(deque.peekFirst()).toBe("B");
        expect(deque.size()).toBe(1);
    });

    test("deve lançar um erro ao adicionar em um deque cheio", () => {
        deque.addLast("A");
        deque.addLast("B");
        deque.addLast("C");
        deque.addLast("D");
        deque.addLast("E");
        deque.addLast("F");
        deque.addLast("G");

        expect(() => deque.addLast("H")).toThrow("Deque cheio!");
    });

    test("deve lançar um erro ao remover de um deque vazio", () => {
        expect(() => deque.removeFirst()).toThrow("Deque vazio!");
        expect(() => deque.removeLast()).toThrow("Deque vazio!");
    });

    test("deve lançar um erro ao acessar o início ou o final de um deque vazio", () => {
        expect(() => deque.peekFirst()).toThrow("Deque vazio!");
        expect(() => deque.peekLast()).toThrow("Deque vazio!");
    });

    test("deve reportar corretamente o tamanho e a capacidade", () => {
        deque.addLast("A");
        deque.addLast("B");

        expect(deque.size()).toBe(2);
        expect(deque.capacity()).toBe(7);
    });

    test("deve manter a ordem correta ao adicionar e remover vários elementos", () => {
        deque.addfirst("A");
        deque.addfirst("B");
        deque.addLast("C");
        deque.addLast("D");
    
        expect(deque.peekFirst()).toBe("B");
        deque.removeFirst();
    
        expect(deque.peekLast()).toBe("D");
        deque.removeLast();
    
        expect(deque.peekFirst()).toBe("C");
        deque.removeFirst();
    
        expect(deque.peekLast()).toBe("C");
        deque.removeLast();
    
        expect(deque.isEmpty()).toBe(true);
    });
});

