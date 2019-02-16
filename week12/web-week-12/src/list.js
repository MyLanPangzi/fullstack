const React = require("react");
const ReactDom = require("react-dom");

class List extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <ul>
      <li>111</li>
      <li>222</li>
      <li>333</li>
      <li>444</li>
      <li>555</li>
    </ul>
  }
}

ReactDom.render(<List></List>, document.body);
