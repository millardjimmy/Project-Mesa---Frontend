import React from 'react';
import BoxList from '../components/BoxList'
import ItemsSideBar from '../components/ItemsSideBar'
import MyBoxesHeader from '../components/MyBoxesHeader'
import NewBoxForm from '../components/NewBoxForm'
import ItemSearchBar from '../components/ItemSearchBar'
import { connect } from 'react-redux';
import { getMoveItems } from '../actions/itemActions'
import { withRouter } from 'react-router-dom'
import { getMoves } from '../actions/moveActions'
import { getBoxes } from '../actions/boxActions'


class BoxContainer extends React.Component {

  state = {
    searchTerm: '',
    items: [],
    moves: []
  }

  componentDidMount() {
    // destructuring
    const { moveId, userId } = this.props.match.params
    this.props.getMoveItems(userId, moveId)
    this.props.getBoxes(userId, moveId)
    // React fetch to get moves to pass to MyBoxesHeader
    // fetch(`http://localhost:3000/users/${userId}/moves`)
    // .then(r => r.json())
    // .then(moves => {
    //   debugger
    //   this.setState({ moves }, () => console.log("updated state", this.state))
    // })

  }

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value }, () => {
      const filteredItems = this.props.moveItems.filter((item) => {
        return item.name.toLowerCase().includes(this.state.searchTerm)
      })
      this.setState({ items: filteredItems })
    })
  }

  filterBoxes = () => { // if this find doesnt find anything we still have to pass down an array
    // return this.props.boxes.find(b => b.items.find(i => i.name.includes(this.state.searchTerm))) || []
    return this.props.boxes.filter(b => b.items.find(i => i.name.includes(this.state.searchTerm)))
  }


  render() {
    // console.log("props IN BOX CONTAINER", this.props.moves);
    const filteredItems = this.props.moveItems.filter((item) => {
      return item.name.includes(this.state.searchTerm) // regex case insensitive /i .match/i
    })

    // const itemBoxIds = this.state.searchTerm ? this.state.items.map((i) => i.box_id) : this.props.moveItems.map((i) => i.box_id)
    const boxes = this.state.searchTerm ? this.filterBoxes() : this.props.boxes
    console.log('%c ITEMS ', "color: red", filteredItems);

    return (
      <div className="container" id="box-cont">
        {/*<h2 className="card-panel white black-text cont-title">My Boxes</h2>*/}
        <div className="row">
          <MyBoxesHeader moves={this.state.moves} />
          <NewBoxForm />
          <ItemSearchBar doubleFilter={this.doubleFilter} handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} />
          <BoxList boxes={boxes} />
          <ItemsSideBar items={filteredItems} searchTerm={this.state.searchTerm} />
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {

  return {
    moves: state.moves,
    user: state.user,
    moveItems: state.items,
    boxes: state.boxes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoveItems: (userId, moveId) => dispatch(getMoveItems(userId, moveId)),
    getMoves: () => dispatch(getMoves()),
    getBoxes: (userId, moveId) => dispatch(getBoxes(userId, moveId))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoxContainer));