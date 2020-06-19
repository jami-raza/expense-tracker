import React from 'react';
import {Header} from './Components/Header.js';
import {Balance} from './Components/Balance.js';
import {IncomeExpense} from './Components/IncomeExpense.js';
import {Addtransaction} from './Components/Addtransaction.js'
import {Transactionlist} from './Components/Transactionlist.js';
import { Footer } from './Components/Footer.js'
import {TransactionProvider} from './Context/Appcontext.js';

import './App.css';

function App() {
  return (
    <TransactionProvider>
      <Header />
      <div className = "container">
      <Balance />
        <IncomeExpense />
        <Transactionlist />
        <Addtransaction />
        <Footer />
        </div>
      
    </TransactionProvider>
  );
}

export default App;
