import React, { useState, useContext, useEffect } from 'react'
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid'
import { ExpenseTrackerContext } from '../../../Context/context'
import formatDate from '../../../utils/formatDate'
import {
  incomeCategories,
  expenseCategories,
} from '../../../constants/categories'
import useStyles from './styles'

const iniitalState = {
  type: '',
  amount: '',
  category: '',
  date: formatDate(new Date()),
}

function Form() {
  const { addTransaction } = useContext(ExpenseTrackerContext)
  const classes = useStyles()
  const [formData, setformData] = useState(iniitalState)
  const createTransaction = () => {
    addTransaction({ ...formData, id: uuidv4() })
  }
  const selectedCategories =
    formData.type === 'Income' ? incomeCategories : expenseCategories
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle2' gutterBottom>
          ....
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setformData({ ...formData, type: e.target.value })}
          >
            <MenuItem value='Incom'>Incom</MenuItem>
            <MenuItem value='Expense'> Expense</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setformData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='number'
          label='Amount'
          value={formData.amount}
          onChange={(e) => setformData({ ...formData, amount: e.target.value })}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='date'
          label='Date'
          value={formData.date}
          onChange={(e) =>
            setformData({ ...formData, date: formatDate(e.target.value) })
          }
          fullWidth
        />
      </Grid>
      <Button
        className={classes.button}
        variant='outline'
        color='primary'
        onClick={createTransaction}
        fullWidth
      >
        Create
      </Button>
    </Grid>
  )
}

export default Form
