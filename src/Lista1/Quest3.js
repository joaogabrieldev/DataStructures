
class StackShare {
    constructor(size = 10){
        this.maxSize = size;
        this.dados = []
        this.topoA = -1
        this.topoB = this.maxSize; 
    }

    empilhaA(dado){
        if(this.isFull()) {
            throw new Error("Stack Full")
        } else {
            this.dados[++this.topoA] = dado
        }
    }

    empilhaB(dado){
        if(this.isFull()){
            throw new Error("Stack Full")
        } else {
            this.dados[--this.topoB] = dado;
        }
    }

    desempilhaA(){
        if(this.isEmptyA()){
            throw new Error("Stack Empty")
        } else {
            return this.dados[this.topoA--];
        }
    }

    desempilhaB(){
        if(this.isEmptyB()){
            throw new Error("Stack Empty"); 
        } else {
            return this.dados[this.topoB++];
        }
    }

    isEmptyA(){
        return this.topoA === -1;
    }

    isEmptyB(){
        return this.topoB === -1;
    }

    isFull(){
        return this.topoA === this.topoB;
    }

}


export default StackShare;