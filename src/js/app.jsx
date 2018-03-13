import React, { Component } from 'react';
import Mortgage from './lib/Mortgage';
import ChangeCalculator from './lib/ChangeCalculator';
import CCalculator from './CCalculator';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      principal: '',
      interestRate: '',
      loanTerm: '',
      period: '12',
      monthly: '' //monthly suppose to the monthly payment after calculated!!!
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleOnChange(e) {
    let { value, name } = e.target
    this.setState({
      [name]: value
    });
  }

  handleCalculate(e) {
    e.preventDefault() //optional
    const { principal, interestRate, loanTerm, period } = this.state
    //const principal = this.state.principal
    const mortgage = new Mortgage(principal, interestRate, loanTerm, period)

    this.setState({
      monthly: '$' + mortgage.monthlyPayment
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>Mortgage Calculator</h1>
        <label>Principal:</label>
        <input name='principal' value={this.state.principal} onChange={this.handleOnChange} />
        <label>InterestRate:</label>
        <input name='interestRate' value={this.state.interestRate} onChange={this.handleOnChange} />
        <label>LoanTerm:</label>
        <input name='loanTerm' value={this.state.loanTerm} onChange={this.handleOnChange} />

        <select name='period' value={this.state.period} onChange={this.handleOnChange}>
          <option value='12'> Monthly</option>
          <option value='4'>Quarterly</option>
        </select>
        <button id='calculate' onClick={this.handleCalculate}>Calculate</button>
        <p id='output'>{this.state.monthly}</p>

        <div>
            <CCalculator />
        </div>

      </div>
    );
  }
}
