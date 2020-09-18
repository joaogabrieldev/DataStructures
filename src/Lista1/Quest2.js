
import Pilha from "../../src/Pilha";



export default function reverse(word) {
        let newWord = new Pilha();
        while(!word.isEmpty()){
            newWord.push(word.pop());
        }
        return newWord;
}

