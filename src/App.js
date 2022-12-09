import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Tips from './components/tips';
import Dave from './components/dave';

import Budget from './components/budget';
import RemainingBudget from './components/remaining';
import ExpenseTotal from './components/expensetotal';
import ExpenseList from './components/expenselist';
import AddExpenseForm from './components/addexpenseform';
import { AppProvider } from './context/appcontext';

const App = () => {
  return (
 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='tips' element={<Tips />} />
        <Route path='dave' element={<Dave />} />
      </Routes>
    <AppProvider>
      <div className='container'>
      <h1 className='mt-3'>Ryan's Budget Tracker</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className='col-sm'>
          <RemainingBudget />
        </div>
        <div className='col-sm'>
          <ExpenseTotal/>
        </div>
      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList />
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='mt-3'>
        <div className='col-sm'>
          <AddExpenseForm />
        </div>
      </div>
    </div>
    </AppProvider>
    </BrowserRouter>
    
   
  );
};

export default App;