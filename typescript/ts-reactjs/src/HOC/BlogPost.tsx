import * as React from "react";
import {FC} from "react";
import {Comment} from "./CommentList";

type Prop = { id: number; data: Comment; };

export const BlogPost: FC<Prop> = ({data}) => (
    <div>
        <h1>{data.id}</h1>
        <p>
            {data.content}
        </p>
    </div>
);