import React from "react";

export default class Li extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return <li>
      <h3> { this.props.title } </h3>
      <p>
        { this.props.content }
      </p>
    </li>
  }
}
