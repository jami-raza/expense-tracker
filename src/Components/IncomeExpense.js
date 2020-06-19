import React,{useContext} from 'react';
import { Transactioncontext } from '../Context/Appcontext.js';

export const IncomeExpense =()=> {
    let {transactions} = useContext(Transactioncontext);
const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].amount > 0)
            income = income + transactions[i].amount
    }
    return income;
}

const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].amount < 0)
            expense -= transactions[i].amount
    }
    return expense;
}





    return(
    
    
        <div className = "inc-exp-container">
            <div >
            <h4>Income</h4>
        <p className = "money plus">+${getIncome()}</p>
            </div>
            <div>
            <h4>Expense</h4>
                <p className = "money minus">-${getExpense()}</p>
            </div>
        </div>
    );
}    

