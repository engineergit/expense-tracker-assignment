import React, {createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';
const initialTransactions = [
    { amount: 200, desc: "tv" },
    { amount: -40, desc: "laptop" },
    { amount: 1200, desc: "deposit" },
    { amount: -200, desc: "bill" }
]
export const TransactionContext = createContext(initialTransactions);
//we intitalize the reducer with staate sate and dispatch
export const TransactionProvider = ({children})=> {
    let [state,dispatch] = useReducer(TransactionReducer, initialTransactions)
   function addTransaction (transObj){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:{
                amount: transObj.amount,
                des:transObj.desc
            },
    }) 
   }
   return (
       <TransactionContext.Provider value={{
        transactions:state,addTransaction
       }}>
        {children}
           </TransactionContext.Provider>
   );
    }
