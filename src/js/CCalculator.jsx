import React, { Component } from 'react';
import ChangeCalculator from './lib/ChangeCalculator';

export default class CCalculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dueAmount: '',
            receivedAmount: '',
            changeAmount: '',

            change: {
                Twenties: '',
                Tens: '',
                Fives: '',
                Ones: '',
                Quarters: '',
                Dimes: '',
                Nickles: '',
                Pennies: '',
            }
        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleCalculate = this.handleCalculate.bind(this);
    }

    handleOnchange(e) {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    handleCalculate(e) {
        const { dueAmount, receivedAmount, change } = this.state;
        const changeCalculator = new ChangeCalculator(dueAmount, receivedAmount);

        this.setState({
            changeAmount: receivedAmount - dueAmount,
            change: changeCalculator.changeResult()
        })
    }

    render() {
        const { change } = this.state
        return (
            <div className='row'>
                <div className='form-group'>
                    <label>How much is due?</label>
                    <input type='number' name='dueAmount' onChange={this.handleOnchange}/>
                    <label>How much was received</label>
                    <input type='number' name='receivedAmount' onChange={this.handleOnchange}/>
                    <button id='btnCalculate' onClick={this.handleCalculate}>Calculate</button>
                </div>

                <div className='form-group'>
                    <p id='balance' >${this.state.changeAmount} </p>
                    <div className='well'>
                        <h6>Twenties</h6>
                        <p id='twenties'>{change.Twenties}</p>
                    </div>
                    <div className='well'>
                        <h6>Tens</h6>
                        <p id='tens'>{change.Tens}</p>
                    </div>
                    <div className='well'>
                        <h6>Fives</h6>
                        <p id='fives'>{change.Fives}</p>
                    </div>
                    <div className='well'>
                        <h6>Ones</h6>
                        <p id='ones'>{change.Ones}</p>
                    </div>
                    <div className='well'>
                        <h6>Quarters</h6>
                        <p id='quarters'>{change.Quarters}</p>
                    </div>
                    <div className='well'>
                        <h6>Dimes</h6>
                        <p id='dimes'>{change.Dimes}</p>
                    </div>
                    <div className='well'>
                        <h6>Nickles</h6>
                        <p id='nickles'>{change.Nickles}</p>
                    </div>
                    <div className='well'>
                        <h6>Pennies</h6>
                        <p id='pennies'>{change.Pennies}</p>
                    </div>
                </div>

            </div>
        )
    }
}