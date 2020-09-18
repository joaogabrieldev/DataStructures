class Pilha {

    constructor(tamanho = 10){
        this.tamanhoMax = tamanho;
        this.dados = [];
        this.topo = -1;
    }

    push(novoDado){
        if (this.isFull()) {
            throw new Error("Overflow");
        } else {
            this.dados[++this.topo] = novoDado;
        }
    }

    pop(){
        if (this.isEmpty()) {
            throw new Error ("Empty");
        } else {
            return this.dados[this.topo--];
        }
    }

    top(){
        if(this.isEmpty()){
            throw new Error("Empty");
        } else {
            return this.dados[this.topo];
        }
    }
    
    clear(){
        this.topo = -1;
    }

    size(){
        return this.topo + 1;
    }

    isEmpty(){
        return this.size() === 0;
    }

    isFull(){
        return this.size() === this.tamanhoMax;
    }

    toString(){
        let result = "["
        for (let i = 0; i<= this.topo; i++){
            result += `${this.dados[i]} `;
        }
        result += "]";
        return result;
    }
}

export default Pilha;