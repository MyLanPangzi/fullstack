import React, {Component, FC} from "react";
import {DataSource} from "./DataSource";

export interface Comment {
    id: number;
    content: string;
}

type Prop = {
    data: Comment[];
};
export const CommentList: FC<Prop> = ({data}) => (
    <ul>
        {data.map(comment => (
            <li key={comment.id}>{comment.content}</li>
        ))}
    </ul>
);