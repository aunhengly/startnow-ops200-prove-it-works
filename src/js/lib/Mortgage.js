module.exports = class Mortgage {
    constructor (principal, interest, term, period) {
        this.principal  = principal;
        this.interest   = interest;
        this.term       = term;
        this.period     = term * 12;
    }
    calculation(P, r, n) {
        return P * ((r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1));
    }
    get monthlyPayment() {
        var P = parseFloat(this.principal);
        var r = parseFloat(this.interest / 100 / 12);
        var n = parseFloat(this.period);
        var M = this.calculation(P, r, n)
        //var M = 1 / 3 ;
        return M.toFixed(2)
    }
}