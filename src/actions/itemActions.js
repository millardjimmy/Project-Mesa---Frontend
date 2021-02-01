// get all items for a SPECIFIC MOVE,
// NOT just all of a user's items, this is all of a user's items INSIDE A SPECIFIC MOVE
export function getMoveItems(userId, moveId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/users/${userId}/moves/${moveId}/boxes`)
      .then(r => r.json())
      .then(boxesWithItems => {
        // debugger
        let nestedArrayOfItems = boxesWithItems.map(function(box) {return box.items})
        let arrayOfItems = [].concat.apply([], nestedArrayOfItems)
        // debugger
        return dispatch({type: 'GET_MOVE_ITEMS', payload: arrayOfItems })
      })
  }
}


// get items for a SPECIFIC BOX
// http://localhost:3000/users/1/moves/1/boxes/2/items
export function getBoxItems(userId, moveId, boxId) {
  return(dispatch) => {
    fetch(`http://localhost:3000/users/${userId}/moves/${moveId}/boxes/${boxId}/items`)
  }
}