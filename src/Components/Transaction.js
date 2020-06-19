import React,{useContext} from 'react';
import { Transactioncontext } from '../Context/Appcontext.js';

export const Transaction = ({ transaction }) =>{
    
    const {  deletetransaction } = useContext(Transactioncontext);

    const sign = transaction.amount < 0 ? '-' : ''
    return(
        <li className = {transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={()=>deletetransaction(transaction.id)} className = "delete-btn">X</button>
            
            </li>
           
           
    )
       
    
    
}