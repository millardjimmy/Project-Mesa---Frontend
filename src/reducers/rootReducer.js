const initialState = {
    moves: []
  }
  
  const rootReducer = (state = initialState, action) => {
    // return state;
    switch (action.type) {
      case "GET_MOVES":
          return {...state, }
  
      default:
        return state
    }
  
  
  }
  
  
  
  export default rootReducer;