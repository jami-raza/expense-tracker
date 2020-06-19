import React,{useContext} from 'react';
import {Transaction} from './Transaction.js';
import {Transactioncontext} from '../Context/Appcontext.js';
import { Clearall } from './clearall.js';


export const Transactionlist = () =>{
    const { transactions } = useContext(Transactioncontext);
    return(
        <>
            <h3>History</h3>
            
                <ul className = "list">
                {transactions.map(transaction =>(<Transaction key={transaction.id}transaction={transaction} />))}

            </ul> 
            <Clearall />   
        </>
    )
}