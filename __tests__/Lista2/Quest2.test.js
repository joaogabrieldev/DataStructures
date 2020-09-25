import QueueStack from "../../src/Lista2/Quest2"

test('Queue with two stacks',()=>{
    const qs = new QueueStack(5)

    qs.enqueue(1)
    qs.enqueue(2)
    qs.enqueue(3)
    expect(qs.size()).toBe(3)
    qs.enqueue(4)
    qs.enqueue(5)
    expect(qs.dequeue()).toBe(1)
    expect(qs.size()).toBe(4)
    expect(qs.front()).toBe(2)
})