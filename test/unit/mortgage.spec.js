// import { exists } from 'fs';

const expect = require ('chai').expect;
const Mortgage = require ('../../src/js/lib/Mortgage');

describe ('Mortgage Calculator', () => {
    let mortgage = null;
    
    beforeEach(() => {
        mortgage = new Mortgage(200000, 3.5, 30);
    });

    it('should have mortgage calculator function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

    it('should have principal = 200,000', () => {
        expect(mortgage.principal).to.equal(200000);
    });

    it('should have the interest = 3.5 %', () => {
        expect(mortgage.interest).to.equal(3.5);
    });

    it('should have term = 30 years', () => {
        expect(mortgage.term).to.equal(30);
    });

    it('should have number of months = 360', () => {
        expect(mortgage.period).to.equal(360);
    });

    it('should calculate', () => {
        expect(parseFloat(mortgage.calculation(200000, 3.5/100/12, 360).toFixed(2))).to.equal(898.09);
    });
});