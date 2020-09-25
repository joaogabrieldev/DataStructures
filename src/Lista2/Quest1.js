import Queue from "../../src/Queue"

class StackQueue {

    constructor(size = 5) {
        this.queue1 = new Queue(size)
        this.queue2 = new Queue(size)
    }

    push(newData) {
        if(this.queue1.isFull()){
            throw new Error("Overflow");
        } else {
            this.queue2.enqueue(newData)
            this.queue1.enqueue(this.queue2.dequeue())
        }
        
    }

    pop() {
        if (this.queue1.isEmpty()) {
            throw new Error("Underflow");
        } else {
            while(this.queue1.start + 1 != this.queue1.end) {
                this.queue2.enqueue(this.queue1.dequeue())
            }
    
            const retorn = this.queue1.dequeue()
    
            while(!this.queue2.isEmpty()) {
                this.queue1.enqueue(this.queue2.dequeue())
            }
    
            return retorn;
        }

        
    }

    size() {
        return this.queue1.size();
    }

    isEmpty(){
        return this.queue1.isEmpty();
    }

    isFull(){
        return this.queue1.isFull();
    }

    top(){
        return this.queue1.data[this.queue1.size() - 1];
    }

    toString() {
        return this.queue1.toString()
    }

}

export default StackQueue;