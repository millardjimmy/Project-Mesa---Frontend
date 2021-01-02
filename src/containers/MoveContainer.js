import React from 'react';
import { connect } from 'react-redux';

class MoveContainer extends React.Component {

  render() {
    console.log(this.props);
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

export default connect(mapStateToProps)(MoveContainer);