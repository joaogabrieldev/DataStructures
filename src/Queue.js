class Queue {
 
    constructor(size = 5) {
        this.data = [];
        this.start = 0;
        this.end = 0;
        this.lenght = size;
    }

    enqueue(newData){
        if(this.isFull()) {
            throw new Error("Overflow")
        } else {
            this.data[this.end++] = newData;
        }
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("Underflow")
        } else {
            return this.data[this.start++]
        }
    }

    front(){
        if(!this.isEmpty()){
            return this.data[this.start];
        } else {
            throw new Error("Vazia")
        }
    }

    isEmpty(){
        return this.start === this.end;
    }

    isFull() {
        return this.size() === this.lenght;
    }

    size(){
        return this.end - this.start;
    }

    clear(){
        this.start = 0;
        this.end = 0;
    }

    toString(){}

}

export default Queue;