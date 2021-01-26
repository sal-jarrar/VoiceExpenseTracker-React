const contextReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSACTIONS':
      return [...state, action.payload]

    case 'DELETE_TRANSACTIONS':
      return state.filter((transaction) => transaction.id !== action.payload)
    default:
      return state
  }
}

export default contextReducer
