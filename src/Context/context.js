import React, { useReducer, createContext } from 'react'

const initialState = []

export const ExpenseTrackerContext = createContext(initialState)
export const Provider = ({ children }) => {
  return <ExpenseTrackerContext>children</ExpenseTrackerContext>
}
