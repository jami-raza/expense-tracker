import React,{useContext} from 'react';
import { Transactioncontext } from '../Context/Appcontext.js';

export const Clearall =()=>{
    const { deletealltransaction } = useContext(Transactioncontext);
    
    
    
    
    return(
        <button onClick={()=>deletealltransaction()} className = "delete-btn0">Clear all</button>
    )
        
    
}
