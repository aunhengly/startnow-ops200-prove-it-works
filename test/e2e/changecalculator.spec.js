
const express = require ('express');
const expect = require ('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

// const changecalculator = express();
// changecalculator.use(express.static(path.join(__dirname, '../../public/')));
// changecalculator.use(express.static(path.join(__dirname, '../../dist/')));

const app = express();

app.use(express.static(path.join(__dirname, '../../public/')));
app.use(express.static(path.join(__dirname, '../../dist/')));

app.listen(8881);

const url = 'http://localhost:8882';

const nightmare = new Nightmare();
let pageObject = null;

describe('ChangeCalculator End to End Test', () => {
    let pageObject = null;

    beforeEach(() => {
        pageObject = nightmare.goto(url);
    });
    
    it('should contain Twenties note for change', () => {
        expect('p#twenties').to.exist;
    });

    it('should contain Tens note fo change', () => {
        expect('p#tens').to.exist;
    });

    it('should contain Fives note for change', () => {
        expect('p#fives').to.exist;
    });
    
    it('should contain Ones note fo change', () => {
        expect('p#ones').to.exist;
    });

    it('should contain Quarter for change', () => {
        expect('p#quarters').to.exist;
    });
    
    it('should contain Dimes note fo change', () => {
        expect('p#dimes').to.exist;
    });

    it('should contain Nickels note for change', () => {
        expect('p#nickles').to.exist;
    });
    
    it('should contain Pennies note fo change', () => {
        expect('p#pennies').to.exist;
    });
    
    it('should correct the Change Calculation', () => {
        return pageObject
        .type('input[name=dueAmount]', '13.01')
        .type('input[name=receivedAmount]', '20')
        .click('button#btnCalculate')
        .evaluate(() => document.querySelector('p#balance').innerText)
        .then((outputText) => {
            expect(outputText).to.equal('$6.99');
        })
    }).timeout(7000);
});