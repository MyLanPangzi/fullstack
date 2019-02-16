import React from "react";
import ReactDom from "react-dom";

export default class ListPanel extends React.Component{
  constructor(props = {list:[]}){
    super(props);
    // list [ {id , name , selected } ]
    // this.state = {};
    // this.state.list = this.props.list;
  }

  // select(id){
  //   console.log(id);
  //   const list = this.state.list;
  //   for(let i=0;i< this.state.list.length ; i++){
  //      if(list[i].id === id){
  //         let item = list[i];
  //         item.selected = !item.selected;
  //      }
  //   }
  //   this.setState({list});
  //   if(this.props.onUpdate){
  //     this.props.onUpdate(this.state.list);
  //   }
  // }

  // add(item){
  //   const list = this.state.list;
  //   list.push(item);
  //   this.setState({list});
  // }

  // del(id){
  //   const list = this.state.list;
  //   let index = null;
  //   for(let i=0;i<list.length;i++){
  //      let item = list[i];
  //      if(item.id === id){
  //        index = i;
  //        break;
  //      }
  //   }
  //   if(index !== null){
  //      list.splice(index,1);
  //      this.setState({list});
  //   }
  // }

  render(){

    const lis = this.props.list.map(item=><li className={item.selected ? "selected" :""} key={item.id} onClick={()=>this.props.onSelect(item.id)}>{ item.name }</li>)

    return <ul>
     {lis}
    </ul>
  }
}
