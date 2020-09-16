class Pilha {
    // Construtor da pilha
    constructor(tamanho = 10){
        this.tamanhoMax = tamanho;
        this.dados = [];
        this.topo = -1;
    }

    push(novoDado){
        // verifica se está cheia a pilha
        if (this.isFull()) {
            throw new Error("Overflow");
        } else {
            //incrementa o topo, para que o novo dado seja inserido na ultima posição do array
            this.dados[++this.topo] = novoDado;
        }
    }

    pop(){
        if (this.isEmpty()) {
            throw new Error ("Empty");
        } else {
            // Decrementa o topo, fazendo com que o elemento anterior se torne o topo. (removendo o antigo do topo)
            return this.dados[this.topo--];
            // retorna o elemento que foi removido
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