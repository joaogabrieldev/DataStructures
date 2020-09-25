import StackQueue from "../../src/Lista2/Quest1"

test('Pilha com 2 Filas', ()=> {
    const sq = new StackQueue()

    sq.push(1)
    sq.push(2)
    sq.push(3)
    sq.push(4)
    sq.push(5)

    expect(sq.pop()).toBe(5)
    expect(sq.top()).toBe(4)
    expect(sq.size()).toBe(4)

    sq.pop()
    sq.pop()
    sq.pop()
    sq.pop()

    expect(sq.size()).toBe(0)
})

