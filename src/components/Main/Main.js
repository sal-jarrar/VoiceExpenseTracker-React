import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core'
import useStyles from './styles'

function Main() {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
      <CardContent>
        <Typography align='center' variant='h5'>
          Total Balance $
        </Typography>
        <Typography
          variant='subtitle1'
          style={{ lineHeight: '1.5em', marginTop: '20px' }}
        >
          say somthing
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Main
