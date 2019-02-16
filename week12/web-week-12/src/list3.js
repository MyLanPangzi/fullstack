const React = require("react");
const ReactDom = require("react-dom");
import Li from "./Li";

class List extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const articles = this.props.articles;
    const lis = articles.map(article=> <Li title={article.title} content={article.content} /> )
    return <ul>
      {lis}
    </ul>
  }
}

const articles = [
  {title:"hhh1",  content:"ccc1"},
  {title:"hhh2",  content:"ccc1"},
  {title:"hhh3",  content:"ccc1"},
    {title:"hhh4",  content:"ccc1"}
];

ReactDom.render(<List articles={articles} ></List>, document.body);
