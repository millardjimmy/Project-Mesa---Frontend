import React from 'react';
import { connect } from 'react-redux';
import { getMoves } from '../actions/moveActions'

const allMoves = 'http://localhost:3000/moves/'

class MoveContainer extends React.Component {

    componentDidMount() {
        fetch(allMoves)
        .then(response => response.json())
        .then(moves => {
            console.log("Fetched Moves:", moves);
        })
    }

  render() {
    console.log("MoveContainer props", this.props);
    return (
      <div>MoveContainer</div>
    )
  }
}

// Retrieve the data from within the Redux Store:
const mapStateToProps = (state) => {
  return {
    moves: state.moves
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getMoves: () => { dispatch({ type: 'GET_MOVES'})}
    }
  }
  
  // the connect is an Higher Order Component which is 
  // listening to the redux for when the mapStateToProps changes,
  // for example - when moves gets updated or
  // whenever the moves reducer gets updated

  export default connect(mapStateToProps, mapDispatchToProps)(MoveContainer);