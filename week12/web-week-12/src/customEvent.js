import React from "react";
import ReactDom from "react-dom";
import Sub from "./Sub";

class Panel extends React.Component{
  constructor(props){
    super(props);
    this.state = {num:"0"};
    this.handle = this.handle.bind(this);
  }

  handle(num){
    this.setState({num});
  }

  render(){
    return <div>
      <h1> {this.state.num} </h1>
      <Sub onFive={this.handle}></Sub>
    </div>
  }

}

ReactDom.render(<Panel/>,document.body);
