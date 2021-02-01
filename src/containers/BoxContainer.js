import React from 'react';
import BoxList from '../components/BoxList'
import ItemsSideBar from '../components/ItemsSideBar'
import MyBoxesHeader from '../components/MyBoxesHeader'
import NewBoxForm from '../components/NewBoxForm'
import ItemSearchBar from '../components/ItemSearchBar'
import { connect } from 'react-redux';
import { getMoveItems } from '../actions/itemActions'
import { withRouter } from 'react-router-dom'


class BoxContainer extends React.Component {

  state = {
    searchTerm: '',
    items: []
  }

  componentDidMount() {
    // destructuring
    const { moveId, userId } = this.props.match.params
    this.props.getMoveItems(userId, moveId)
    // this.setState({ items: this.props.moveItems })
  }

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value }, () => {
      const filteredItems = this.props.moveItems.filter((item) => {
        return item.name.toLowerCase().includes(this.state.searchTerm)
      })
      this.setState({ items: filteredItems })
    })
  }


  render() {
    console.log("STATE IN BOX CONTAINER", this.state);
    const filteredItems = this.props.moveItems.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchTerm)
    })

    const itemBoxIds = this.state.searchTerm ? this.state.items.map((i) => i.box_id) : this.props.moveItems.map((i) => i.box_id)

    return (
      <div className="container" id="box-cont">
        {/*<h2 className="card-panel white black-text cont-title">My Boxes</h2>*/}
        <div className="row">
          <MyBoxesHeader />
          <NewBoxForm />
          <ItemSearchBar doubleFilter={this.doubleFilter} handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} />
          <BoxList itemBoxIds={itemBoxIds} searchTerm={this.state.searchTerm} props={this.props}/>
          <ItemsSideBar items={filteredItems} searchTerm={this.state.searchTerm} props={this.props}/>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  // console.log("STATE",state);
  console.log(state)
  return {
    move: state.move,
    user: state.user,
    moveItems: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoveItems: (userId, moveId) => dispatch(getMoveItems(userId, moveId))
  }
}

