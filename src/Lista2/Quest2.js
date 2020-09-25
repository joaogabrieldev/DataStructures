import Pilha from "../../src/Pilha";


 class QueueStack {

    constructor(size = 5) {
        this.queue1 = new Pilha(size)
        this.queue2 = new Pilha(size)
    }

    enqueue(newData) {
        if(this.queue1.isFull()){
            throw new Error("Overflow")
        } else {
            this.queue2.push(newData)
            this.queue1.push(this.queue2.pop())
        }
    }

    dequeue() {
        while(this.queue1.topo != 0) {
            this.queue2.push(this.queue1.pop())
        }
        const resposta = this.queue1.pop()
        while(!this.queue2.isEmpty()){                                                                                              
            this.queue1.push(this.queue2.pop())
        }
        return resposta
    }

    size() {
        return this.queue1.size()
    }
    
    front() {
        return this.queue1.dados[0]
    }
}

export default QueueStack;