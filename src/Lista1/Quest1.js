
class Fraction {
    constructor(numerator, denominator = 1){
        if(denominator === 0) {
            throw new Error("impossible to divide by 0");
        }

        this.numerator = numerator;
        this.denominator = denominator;

    }

    multiply(fraction){
        return new Fraction(this.numerator * fraction.numerator, this.denominator * fraction.denominator);
    }

    divide(fraction){
        return new Fraction(this.numerator * fraction.denominator, this.denominator * fraction.numerator);
    }

    toString(){
        return `${this.numerator}/${this.denominator}`
    }
}

export default Fraction;