import React from "react";
import ReactDom from "react-dom";

export default class Sub extends React.Component{
  constructor(props){
    super(props);
    this.handle = this.handle.bind(this);
    this.state = { num : 0 }
  }

  handle(){
    ++this.state.num;
    if(!(this.state.num % 5)){
      this.props.onFive(this.state.num);
    }
  }

  render(){
    return <button onClick={ this.handle }> Click me! </button>
  }

}
