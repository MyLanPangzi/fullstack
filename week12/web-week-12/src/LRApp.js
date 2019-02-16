import React from "react";
import ReactDom from "react-dom";
import ListPanel from "./ListPanel";
const uuid = require("uuid").v1;

const list = [
  {name:"aaaaa" ,id:uuid()},
  {name:"bbbbb" ,id:uuid()},
  {name:"ccccc" ,id:uuid()},
  {name:"ddddd" ,id:uuid()}
];

class LRApp extends React.Component{
  constructor(props = {list:[]}){
    super(props);
    this.state = {
      leftList:this.props.list,
      rightList: []
    };

    this.selectLeft = this.selectLeft.bind(this);
    this.selectRight = this.selectRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  selectLeft(id){
      const list = this.state.leftList;
      for(let i=0;i< list.length ; i++){
         if(list[i].id === id){
            let item = list[i];
            item.selected = !item.selected;
         }
      }
      this.setState({leftList : list});
  }

  selectRight(id){
    const list = this.state.rightList;
    for(let i=0;i< list.length ; i++){
       if(list[i].id === id){
          let item = list[i];
          item.selected = !item.selected;
       }
    }
    this.setState({rightList : list});
  }

  moveRight(){
    let selectedItems = [];
    this.state.leftList.forEach(item=>{
      if(item.selected){
        selectedItems.push(item);
      }
    });
    const leftList = this.state.leftList;
    const rightList = this.state.rightList;
    for(let i=0;i<selectedItems.length;i++){
      rightList.push(selectedItems[i]); // add
      this.delLeftItem(selectedItems[i].id);
    }
    this.forceUpdate(); // render()
  }

  moveLeft(){
    let selectedItems = [];
    this.state.rightList.forEach(item=>{
      if(item.selected){
        selectedItems.push(item);
      }
    });
    const leftList = this.state.leftList;
    const rightList = this.state.rightList;
    for(let i=0;i<selectedItems.length;i++){
      leftList.push(selectedItems[i]); // add
      this.delRightItem(selectedItems[i].id);
    }
    this.forceUpdate(); // render()
  }

  delRightItem(id){
      const list = this.state.rightList;
      let index = null;
      for(let i=0;i<list.length;i++){
         let item = list[i];
         if(item.id === id){
           index = i;
           break;
         }
      }
      if(index !== null){
         list.splice(index,1);
         // this.setState({list});
      }
  }

  delLeftItem(id){
    const list = this.state.leftList;
    let index = null;
    for(let i=0;i<list.length;i++){
       let item = list[i];
       if(item.id === id){
         index = i;
         break;
       }
    }
    if(index !== null){
       list.splice(index,1);
       // this.setState({list});
    }
  }


  render(){
    return <div>
      <div style={{float:"left"}}>
      <ListPanel list={this.state.leftList} onSelect={ this.selectLeft }/>
      </div>

      <div style={ {float:"left"} }>
      <button onClick={this.moveLeft}> &lt;= </button>
      <button onClick={this.moveRight}> =&gt; </button>
      </div>

      <div style={ {float:"left"} }>
      <ListPanel list={this.state.rightList} onSelect = {this.selectRight} />
      </div>
    </div>
  }
}

ReactDom.render(
  <LRApp list={list}/>
,document.body);
