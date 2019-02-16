import React from "react";
import ReactDom from "react-dom";

class Tabs extends React.Component{
  constructor(props = { list : [] }){
    super(props);
    // this.state  ={}
    // this.state.list = this.props.list;
    this.state = {
      list : this.props.list,
      currentName: null
    }
  }

  select(name){
    this.setState({currentName: name}); // render
  }

  render(){

    let as = [];
    let div;

    this.state.list.forEach(tab =>{
      as.push(<a className={this.state.currentName === tab.name ? "active" : ""}  key={tab.name} onClick={()=>this.select(tab.name)}> {tab.name} </a>);
      // divs.push(<div key={tab.name}>{tab.body}</div>)
      if(this.state.currentName === tab.name){
        div = <div>{tab.body}</div>
      }
    });

    return <div className="tabs">
      <nav>
        {as}
      </nav>
      { div }
    </div>
  }
}

const list = [
  {name:"A", body:"aaaa"},
  {name:"B", body:"bbbb"},
  {name:"C", body:"cccc"},
]

ReactDom.render(<Tabs list={list}/>,document.body);
