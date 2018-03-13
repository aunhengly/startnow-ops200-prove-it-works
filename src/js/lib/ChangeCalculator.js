module.exports = class ChangeCalculator {
    constructor (dueAmount, receivedAmount) {
        this.dueAmount      = dueAmount;
        this.receivedAmount = receivedAmount;
    }
    changeResult() {
        var result = parseFloat (this.receivedAmount - this.dueAmount);
        Math.round(result, 2);
        var exChangeAmount = result * 100;
        
        const Twenties = parseInt(exChangeAmount / 2000);
        exChangeAmount %= 2000;

        const Tens    = parseInt(exChangeAmount / 1000);
        exChangeAmount %= 1000;

        const Fives = parseInt(exChangeAmount / 500);
        exChangeAmount %= 500;

        const Ones = parseInt(exChangeAmount / 100);
        exChangeAmount %= 100;

        const Quarters = parseInt(exChangeAmount / 25);
        exChangeAmount %= 25;

        const Dimes = parseInt(exChangeAmount / 10);
        exChangeAmount %= 10;

        const Nickles = parseInt(exChangeAmount / 5);
        exChangeAmount %= 5;

        const Pennies = Math.round(exChangeAmount)
    
        return {
            Twenties,
            Tens,
            Fives,
            Ones,
            Quarters,
            Dimes,
            Nickles,
            Pennies,
        };
    }

}
