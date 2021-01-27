// GET BOXES FOR SPECIFIC MOVE
export function getBoxes(userId, moveId) {
    return(dispatch) => {
      fetch(`http://localhost:3000/users/${userId}/moves/${moveId}/boxes`)
        .then(r => r.json())
        .then(boxes => {
          return dispatch({type: 'GET_BOXES', payload: boxes})
        })
    }
  }