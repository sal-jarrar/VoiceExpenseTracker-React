import { useContext } from 'react'
import { ExpenseTrackerContext } from './context/context'

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from './constants/categories'
const useTransactions = (title) => {
  resetCategories()
  const { transactions } = useContext(ExpenseTrackerContext)
}
export default useTransactions
