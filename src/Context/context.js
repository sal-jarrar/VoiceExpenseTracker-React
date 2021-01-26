import React, { useReducer, createContext } from 'react'
import contextReducer from './contextReducer'

const initialState = []

export const ExpenseTrackerContext = createContext(initialState)
export const Provider = ({ children }) => {
  const [transaction, dispatch] = useReducer(contextReducer, initialState)
  // Actions
  const addTransaction = (transaction) =>
    dispatch({ type: 'ADD_TRANSACTIONS', payload: transaction })
  const deleteTransaction = (id) =>
    dispatch({ type: 'DELETE_TRANSACTIONS', payoad: id })
  return (
    <ExpenseTrackerContext
      value={{
        addTransaction,
        deleteTransaction,
        transaction,
      }}
    >
      {children}
    </ExpenseTrackerContext>
  )
}
