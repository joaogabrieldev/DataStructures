// Teste da questão 1 da lista
import Fraction from "../../src/Lista1/Quest1";

let f1;
let f2;
let f3;

beforeEach(() => {
    f1 = new Fraction(2,4);
    f2 = new Fraction(4,8);
    f3 = new Fraction(0,2);
    
});

test("instantiation: ", () => {
    expect(f1.numerator).toBe(2);
    expect(f1.denominator).toBe(4);
    expect(f2.numerator).toBe(4);
    expect(f2.denominator).toBe(8);
})

test("Split error: ", () => {
    expect(() => {
        new Fraction(3, 0)
    }).toThrow('impossible to divide by 0');

    expect(() => {
        f1.divide(f3).toThrow("imposible to divide by 0")
    })

})

test("multiplication: ", () => {
    expect(f1.multiply(f2).toString()).toBe("8/32");

});

test("division: ", () => {
    expect(f2.divide(f1).toString()).toBe("16/16");
});



