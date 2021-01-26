// const movesIndex = `http://localhost:3000/api/v1/moves/`

// GET MOVES
export function getMoves(id) {
    return(dispatch) => {
      fetch(`http://localhost:3000/users/${id}/moves`)
        .then(r => r.json())
        .then(moves => {
          // debugger
          return dispatch({type: 'GET_MOVES', payload: moves })
      })
    }
  }
  
  
  // POST TO MOVES
  export function addMove(name, date, userId) {
    // debugger
    return(dispatch) => {
      fetch(`http://localhost:3000/users/${userID}/moves`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            date: date
        })
      })
        .then(r => r.json())
        .then(newMove => {
          // debugger
          return dispatch({type: 'ADD_MOVE', payload: newMove})
        })
    }
  }