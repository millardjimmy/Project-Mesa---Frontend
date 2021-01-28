import React from 'react'
import { connect } from 'react-redux';


class ItemsSideBar extends React.Component {
    componentDidMount() {

    }


  render() {
    console.log("ItemsSideBar PROPS", this.props);
    return (
      <div className="col s3" style={{border: 'ridge #4dd0e1 3px', paddingTop: '5px', marginTop: '15px'}}>
      <h5>ALL ITEMS ASSOCIATED WITH THIS MOVE</h5>
      </div>
    )
  }

  const mapStateToProps = state => {
    // console.log("STATE",state);
    return {
      move: state.move,
      user: state.user
    }

}



export default connect(mapStateToProps)(ItemsSideBar);