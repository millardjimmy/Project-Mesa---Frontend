import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addMove, prefillForm, editMove } from '../actions/moveActions';

class NewMoveForm extends React.Component {

  // Local react state for form since we are not passing any data down from this
  state = {
    moveName: '',
    moveDate: '',
    editing: false
  }

// Trigger the form to prefill when you click edit button, updating local state values

componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.selectedMove !== prevProps.selectedMove) {
        this.setState({
              moveName: this.props.selectedMove.name,
              moveDate: this.props.selectedMove.date,
              editing: !this.state.editing
        }, () => console.log("%c componentDidUpdate", 'color: red', this.state))
    }
}
  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handles both New and Edit 
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.editing === false) { // CREATE MODE
        this.props.addMove(this.state.moveName, this.state.moveDate, this.props.userId);
  
        this.setState({ // clear fields once u submit
          moveName: '',
          moveDate: ''
        })
  
      } else if (this.state.editing === true) {
          this.props.editMove(this.state.moveName, this.state.moveDate, this.props.userId, this.props.selectedMove.id)
  
          this.setState({
            moveName: '',
            moveDate: '',
            editing: false
          })
      }
  }


  render() {
    console.log("%c move form props", 'color: pink', this.props);
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="row new-move-form">
          <div className="input-field col s6">
            <input onChange={this.handleChange} value={this.state.moveName} name="moveName" placeholder="Move Name" id="move_name" type="text" autoComplete="off" required/>
          <label htmlFor="move_name">Name Your Move</label>
        </div>
          <div className="input-field col s6">
            <input onChange={this.handleChange} value={this.state.moveDate} name="moveDate"  id="move_date" type="date" autoComplete="off" required/>
            <label htmlFor="move_date">Moving On...</label>
            <div className="submit-btn">
            <button type="submit" className="col s2 btn-small cyan lighten-2">
                {this.state.editing ? "Submit" : "Add"}
              </button>
            </div>
          </div>

        </form>
      </Fragment>
    )
  }
}


function mapStateToProps(state) {
  // console.log("state in NewMoveForm", state);
  return {
    userId: state.user.user_id,
    selectedMove: state.move
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addMove: (name, date, userId) => dispatch(addMove(name, date, userId)),
    prefillForm: (move) => dispatch(prefillForm(move)),
    editMove: (name, date, userId, moveId) => dispatch(editMove(name, date, userId, moveId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMoveForm);