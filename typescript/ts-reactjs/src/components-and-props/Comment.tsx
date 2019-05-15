import React, {Component} from "react";

export const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

interface Author {
    name: string;
    avatarUrl: string;
}

interface Movie {
    date: Date;
    text: string;
    author: Author;
}

interface CommentProp {
    comment: Movie;
}

class UserInfo extends Component<{ avatarUrl: string, name: string }> {
    render() {
        return <div>
            <img src={this.props.avatarUrl} alt={"图片"}/>
            <div>
                {this.props.name}
            </div>
        </div>;
    }
}

class Content extends Component<{ text: string, date: Date }> {
    render() {
        return <>
            <div>
                {this.props.text}
            </div>
            <div>
                {this.props.date.toLocaleDateString()}
            </div>
        </>;
    }
}

export class Comment extends Component<CommentProp> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {date, text, author: {name, avatarUrl}} = this.props.comment;
        return (
            <div>
                <UserInfo avatarUrl={avatarUrl} name={name}/>
                <Content text={text} date={date}/>
            </div>
        );
    }
}