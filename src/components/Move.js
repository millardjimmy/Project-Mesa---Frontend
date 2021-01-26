import React from 'react';
import { connect } from 'react-redux';
import { deleteMove } from '../actions/moveActions'

class Move extends React.Component {

  handleClickToEdit = () => {
    console.log("triggered handleClickToEdit");
  }

  handleDelete = () => {
    console.log("triggered handleDelete");
    this.props.deleteMove(this.props.userId, this.props.move.id)
  }

  reformatDate = (date) => {
    // debugger
    let arrayOfDate = date.split("-")
    let newArrOfDate = []
    newArrOfDate.push(arrayOfDate[1])
    newArrOfDate.push(arrayOfDate[2])
    newArrOfDate.push(arrayOfDate[0])
    return newArrOfDate.join(',').split(',').join("-")
  }

  render() {
    // debugger
    console.log("move props", this.props)
    return (
      <div className="col s12 m6">
      <div className="card small move-card">
        <div className="card-content white-text">
          <span className="move_title card-title">
            {this.props.move.name}

          </span>
          {this.reformatDate(this.props.move.date)}
        </div>
        <div className="see-boxes-btn">
            <button className="see-boxes-btn-text waves-effect cyan lighten-2 btn-small">
              See Boxes
            </button>
        </div>
        <button onClick={this.handleDelete} className="delete-move-btn btn-floating btn-small waves-effect red accent-3">
          <span style={{fontFamily: 'Hammersmith One'}}>X</span>
        </button>
        <button onClick={this.handleClickToEdit} className="edit-move-btn btn-floating btn-small waves-effect orange lighten-1">
          <span style={{fontFamily: 'Hammersmith One'}}><i className="material-icons">edit</i></span>
        </button>
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