import React from 'react';
import './App.css';
import Child from './child';
import {TransactionProvider} from './transContext';
function App() {
  return (
    //  <tras
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;
