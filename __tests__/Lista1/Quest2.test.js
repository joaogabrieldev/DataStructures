import reverse from "../../src/Lista1/Quest2";
import Pilha from "../../src/Pilha";


let word;
beforeEach(() => {
    word = new Pilha();
})

test("Invertendo: ", () => {
    word.push('G');
    word.push('A');
    word.push('B');
    word.push('I');
    word.push('N');
    word.push('E');
    word.push('T');
    word.push('E');
    word = reverse(word);
    expect(word.toString()).toBe("[E T E N I B A G ]");
})