import React,{createContext, useReducer} from 'react';
import Appreducer from './Appreducer'

/* saved transaction list  */
const initialtransaction ={
    transactions:
    [
    {id:1 ,   amount: 500, text: "Cash" },
    {id:2 ,   amount: -50, text: "Cold Drink" },
    {id:3 ,   amount: 100, text: "Deposit" },
    {id:4 ,   amount: -200, text: "Books" },
]
}
export const Transactioncontext = createContext(initialtransaction);

export const TransactionProvider =({children}) => {
    const [state, dispatch] = useReducer(Appreducer, initialtransaction);
    function deletetransaction(id){
        dispatch({
            type : "Delete_Transaction",
            payload : id
        });
    }


    function addtransaction(transaction) {
        dispatch({
            type : "ADD_TRANSACTION",
            payload : transaction
                
        });
    }

    function deletealltransaction(){
        dispatch({
            type : "Deleteall_Transaction",
            
        });
    }

    return (<Transactioncontext.Provider value={{
        transactions : state.transactions,
        deletetransaction,
        addtransaction,
        deletealltransaction
    }}>
        {children}
        </Transactioncontext.Provider>
        );

    

}
