import React from 'react';
import { connect } from 'react-redux';
import { deleteMove } from '../actions/moveActions'

class Move extends React.Component {

    handleClick = () => {
        console.log("triggered handleClick");
    }
// // TODO: reformat date!
  render() {
      console.log("move props", this.props)
    return (
      <div className="col s12 m6">
      <div className="card small move-card">
        <div className="card-content white-text">
          <span className="move_title card-title">{this.props.move.name}</span>
          <p>{this.props.move.date}</p>
        </div>
        <div className="see-boxes-link">
            <button className="waves-effect cyan lighten-2 btn-small">See Boxes</button>
        </div>
        <button onClick={this.hangleClick} className="delete-move-btn btn-floating btn-small waves-effect waves-light red">X</button>
      </div>
    </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   // console.log("inside move, redux store state is", state);
//   let id = ownProps.match.params.moveId
// return {
//   move: state.posts.find(move => move.id === id)
// }
// }

function mapStateToProps(state) {
    return {
      userId: state.user.user_id
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      deleteMove: (userId, moveId) => dispatch(deleteMove(userId, moveId))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Move);
