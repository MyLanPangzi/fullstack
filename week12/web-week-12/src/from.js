import React from "react";
import ReactDom from "react-dom";



class MyForm extends React.Component{

  constructor(props){
    super(props);
    this.state = { body: " default " , num: 0 }
    this.add  = this.add.bind(this);
  }

  add(){
    this.setState({num: this.state.num + 1});
  }

  closeSubmit(event){
    event.preventDefault();
  }

  render(){
    return <form onSubmit={this.closeSubmit}>
      <textarea value={this.state.body + this.state.num} style={ {backgroundColor:"#eee"} }></textarea>
      <button className={"testclass"} onClick={this.add}> click </button>
    </form>
  }

}

ReactDom.render(<MyForm/> , document.body);
