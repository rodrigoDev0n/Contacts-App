
export const contactReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[CONTACT] Add Contact':
        return [...initialState, action.payload];
  
    case '[CONTACT] Delete Contact':
        return initialState.filter(c => c.email != action.payload);

    default:
        return initialState;
  }
}
