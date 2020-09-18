import StackShare from "../../src/Lista1/Quest3"

let p;

beforeEach(() => {
    p = new StackShare(4);
});

test("Instanciação", () => {
    p.empilhaA(1);
    p.empilhaA(2);
    p.empilhaB(3);
    p.empilhaB(4);
    
    expect(p.topoA).toBe(1);
    expect(p.topoB).toBe(2);
})

test("Stack Empty", () => {
    expect(() => {
        p.desempilhaA()
    }).toThrow('Stack Empty')
})

test("Stack full", () => {
    p.empilhaA(1)
    p.empilhaA(1)
    p.empilhaB(1)
    p.empilhaB(1)
    p.empilhaB(10)
    expect(p.isFull()).toBe(true)
})
