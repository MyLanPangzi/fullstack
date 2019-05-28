import React, {Component, ComponentType} from "react";
import {DataSource} from "./DataSource";
import {BlogPost} from "./BlogPost";
import {CommentList} from "./CommentList";

type MapDataToProps<P, K extends keyof P> = (dt: typeof DataSource, props?: P) => P[K];

function withSubscription<P extends {}, K extends keyof P>(Cmp: ComponentType<P>, prop: K, selectData: MapDataToProps<P, K>) {
    return class WithSubscription extends Component<P> {
        constructor(props: P) {
            super(props);
            this.state = {
                [prop]: selectData(DataSource, props)
            }
        }

        private handleChange = () => this.setState({
            [prop]: selectData(DataSource, this.props)
        });

        componentDidMount(): void {
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount(): void {
            DataSource.removeChangeListener(this.handleChange);
        }

        render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

            return (
                <Cmp {...this.props} {...this.state}/>
            );
        }
    }
}

const BlogWithSubscription = withSubscription(BlogPost, 'data', (DataSource, props) => DataSource.getBlogPost(props!.id)!);
const CommentListWithSubscription = withSubscription(CommentList, 'data', DataSource => DataSource.getComments());

export class App extends Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <BlogWithSubscription id={1} data={DataSource.getBlogPost(1)!}/>
                <CommentListWithSubscription data={DataSource.getComments()}/>
            </>
        );
    }
}