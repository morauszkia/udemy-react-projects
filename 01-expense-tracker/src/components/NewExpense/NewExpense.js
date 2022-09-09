import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  // const startEditingHandler = () => {
  //   setIsEditing(true);
  // };

  // const stopEditingHandler = () => {
  //   setIsEditing(false);
  // };

  const toggleEditingHandler = () => {
    setIsEditing(prevState => !prevState);
  };

  return (
    <div className="new-expense" startEditingHandler>
      {!isEditing && (
        <button onClick={toggleEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
