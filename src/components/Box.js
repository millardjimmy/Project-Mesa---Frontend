import React from 'react';


class Box extends React.Component {


  render() {
    return (
        <div className="col s12 m4">
        <div className="card small">
        <p>Box Number: {this.props.box.id}</p>
        <span className="card-title">
          "{this.props.box.name}"

        </span>
        <p>Category: {this.props.box.category}</p>
        </div>
      </div>
    )
  }
}

export default Box;