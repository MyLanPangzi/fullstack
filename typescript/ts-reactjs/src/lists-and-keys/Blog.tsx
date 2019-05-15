import React, {FC} from "react";

interface Post {
    id: number;
    title: string;
    content: string;
}

interface BlogProp {
    posts: Post[];

}

export const Blog: FC<BlogProp> = ({posts}) => (
    <div>
        <ul>
            {posts.map((e, i) => <li key={e.id}>{e.title} </li>)}
        </ul>
        <hr/>
        {posts.map((e, i) => {
            return (
                <div key={e.id}>
                    <h1>{e.title}</h1>
                    <p>{e.content}</p>
                </div>
            )
        })}
    </div>
)