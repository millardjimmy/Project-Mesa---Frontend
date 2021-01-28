// get all items for a SPECIFIC MOVE,
// NOT just all of a user's items, this is all of a user's items INSIDE A SPECIFIC MOVE
export function getItemsForMove(userId, moveId) {
    return(dispatch) => {
      fetch(`http://localhost:3000/users/${userId}/moves/${moveId}/boxes`)
        .then(r => r.json())
        .then(items => {
          return dispatch({type: 'GET_SPECIFIC_ITEMS', payload: items })
        })
    }
  }