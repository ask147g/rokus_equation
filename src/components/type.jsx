import React from "react";
import { types } from "../consts/types";
import Distance from "./distance";
import Plane from "./plane";

class Type extends React.Component {
  state = {
    setConfiguration: false
 }

  add() {
    this.props.changeStart();

    this.setState({setConfiguration: !this.state.setConfiguration})
  }

  render() {
  return (
    <>
      <div className="selector">
        <button onClick={this.props.changeType}>
          {this.props.type}
        </button>
      </div>
      <div className="start">
        <button onClick={() => this.add()}>
          {this.props.start}
        </button>
      </div>
      
      {this.state.setConfiguration && this.props.type == types[0] &&  <Distance />}
      {this.state.setConfiguration && this.props.type == types[1] &&  <Plane />}
    </>
  )
}
}

export default Type;