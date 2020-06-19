import React,{useState,useContext} from 'react';
import { Transactioncontext } from '../Context/Appcontext.js';

export const Addtransaction = () =>{
    
    let [text,settext] = useState('');
    let [amount,setamount] = useState(0);
    const { addtransaction } = useContext(Transactioncontext);
    const handleAddition = (event) => {
        event.preventDefault();

        const newtransaction = {
            id:Math.floor(Math.random() * 100000000),
            text,
            amount:Number(amount)
        }
        addtransaction(newtransaction);
        if (Number(amount) === 0) {
            alert("Please enter correct value");
            return false;
        }
        

        settext('');
        setamount(0)
    }
    return(
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit = {handleAddition}>
                <div className = "form-control">
                    <label >Text</label>
                    <input type="text" value={text} onChange={(ev)=>settext(ev.target.value)} 
                    placeholder ="Enter text..." required/>
                </div>
                <div className = "form-control">
                    <label>Amount<br />
                    (negative -expense ,positive + income)
                    </label>
                    <input type="number" value={amount} onChange={(ev)=>setamount(ev.target.value)}
                     placeholder ="Enter Amount.." required/>
                    
                </div>
                <button type="submit" className = "btn">Add Transaction</button>

            </form>
        </div>
    )
}