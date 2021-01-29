import React from 'react';


class Box extends React.Component {


  render() {
    return (
        <div className="col s12 m4">
        <div className="card small">
        <p>Box Number: {this.props.idx + 1}</p>
        <span className="card-title">
          Name: "{this.props.box.name}"

        </span>
        <p>Category: {this.props.box.category}</p>
        </div>
      </div>
    )
  }
}

export default Box;