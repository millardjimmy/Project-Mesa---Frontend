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
  
  
  // POST TO MOVES | create a move
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

// Delete a Move
// ENDPOINT: http://localhost:3000/users/1/moves/1
export function deleteMove(userId, moveId) {
    return(dispatch) => {
      fetch(`http://localhost:3000/users/${userId}/moves/${moveId}`, {
        method: 'DELETE'
      })
        return dispatch({type: 'DELETE_MOVE', payload: moveId})
    }
  }

// SELECT MOVE TO EDIT:
export function selectMove(move) {
    return {
      type: "SELECT_MOVE",
      payload: move
    }
  }
  
  // PREFILL EDIT FORM:
  export function prefillForm(move) {
    return {
      type: "PREFILL_FORM"
    }
  }
  

// PATCH request / EDIT A MOVE:
// http://localhost:3000/users/userid/moves/moveId
export function editMove(name, date, userId, moveId) {
    return(dispatch) => {
        fetch(`http://localhost:3000/users/${userId}/moves/${moveId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: name,
        date: date
      })
    })
      .then(response => response.json())
      .then(editedMove => {
        // debugger
        return dispatch({type: 'EDIT_MOVE', payload: editedMove })
      })
  }
}