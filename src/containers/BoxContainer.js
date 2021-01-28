import React from 'react';
import BoxList from '../components/BoxList'
import ItemsSideBar from '../components/ItemsSideBar'


const BoxContainer = props => {

  return (
    <div className="container">
      <h2 className="card-panel white black-text cont-title">My Boxes</h2>
      <BoxList props={props} />
      <ItemsSideBar />
    </div>
  )
}

export default BoxContainer;