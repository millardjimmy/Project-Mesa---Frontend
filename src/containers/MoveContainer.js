import React from 'react';
import MoveList from '../components/MoveList'

// purely presentational component
const MoveContainer = props => {

    return (
      <div className="container">
        <h2 className="card-panel cyan darken-3-text white-text" style={{fontFamily: 'Oswald'}}>My Moves</h2>
          <MoveList />
      </div>
    )
}

export default MoveContainer
