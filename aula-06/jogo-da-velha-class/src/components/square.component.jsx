import React from "react";
import "./square.style.css";

export class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    this.props.onClick(this.props.id)
  }

  render() {
    return (
      <button onClick={this.onClick} className="square">
        {this.props.mark}
      </button>
    );
  }
}
