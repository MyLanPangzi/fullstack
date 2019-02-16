
import React from "react";
import {connect} from "react-redux";
import actions from "./uilist/actions";
import get_sub_state from "./uilist/get_sub_state";

/**
item : {
  name , id , selected
}
*/
class UIList extends React.Component{
  constructor(props){
    super(props);
    // this.state
  }

  render(){

    let lis = this.props.list.map(item=><li onClick={()=>this.props.select(item.id)} style={ {backgroundColor: item.selected? "yellow": "none"} }>{item.name}</li>)
    return <ul>
      {lis}
    </ul>
  }
}

export default connect(get_sub_state,actions)(UIList);
