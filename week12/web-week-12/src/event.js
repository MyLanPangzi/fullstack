import React from "react";
import ReactDom from "react-dom";

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = { anum: 0,bnum:0 };
    this.listenerHandle = this.listenerHandle.bind(this);
  }

  listenerHandle(type){
    if(type==="a"){
      this.setState({anum: this.state.anum + 1});
    }else if(type==="b"){
      this.setState({bnum: this.state.bnum + 1});
    }
  }

  render(){
    return <ul>
      <li> A: {this.state.anum} </li>
      <li> B: {this.state.bnum} </li>
      <li onClick={function(){this.listenerHandle("a")}.bind(this)}>aaaa</li>
      <li onClick={()=>this.listenerHandle("b")}>bbbb</li>
    </ul>
  }

}

ReactDom.render(<List/>,document.body);
