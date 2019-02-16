const React = require("react");
const ReactDom = require("react-dom");
const uuid = require("uuid").v1;

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.state.list = props.list.map(function (str) {
       return {str, key:uuid()}
    });
    // this.del = this.del.bind(this);
  }

  del(key){
    let delIndex;

    // for(;;){}
    this.state.list.forEach((item,index)=>{
      if(item.key === key){
        delIndex = index;
      }
    })

    this.state.list.splice(delIndex,1);
    this.setState({list:this.state.list});
    // this.forceUpdate();

  }

  render(){

    const lis = this.state.list.map( item => <li onClick={()=>this.del(item.key)} key={item.key}> {item.str} </li> );

    return <ul>
      {lis}
    </ul>
  }
}

const list = ["aaa","bbb","ccc","ddd"];

ReactDom.render(<List list={list}></List>, document.body);
