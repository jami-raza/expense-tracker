import React,{useContext} from 'react';
import { Transactioncontext } from '../Context/Appcontext.js';


export const Balance = () =>{
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
        
        <div>
            <h4>Your Balance</h4>
            <h1>${ getIncome() - getExpense()}</h1>
        </div>
    )
}