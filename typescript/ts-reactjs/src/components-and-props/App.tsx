import React, {FC} from "react";

interface WelcomeProp {
    name: string;
}

const Welcome: FC<WelcomeProp> = ({name}) => (
    <h1>Hello {name} </h1>
)
export const App: FC = (props) => (
    <div>
        <Welcome name={'Hello'}/>
        <Welcome name={'World'}/>
        <Welcome name={'!'}/>
    </div>
)