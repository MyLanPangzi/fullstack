import React from "react";
import ReactDom from "react-dom";

class Time extends React.Component{
  constructor(props){
     super(props);
     this.state = { num: 0 };
  }
  render(){

    if(this.props.max > this.state.num){
      setTimeout( ()=> {
        this.setState({num: this.state.num + 1});
      },1000);
    }

    return <div>
      { this.state.num }
    </div>
  }
}


ReactDom.render(<Time max={6}/>,document.body)
