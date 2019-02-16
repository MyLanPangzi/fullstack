const React = require("react");
const ReactDom = require("react-dom");
import Li from "./Li";

class List extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <ul>
      <Li title="t1" content="c1"></Li>
      <Li title="t2" content="c2"></Li>
      <Li title="t3" content="c3"></Li>
    </ul>
  }
}

ReactDom.render(<List></List>, document.body);
