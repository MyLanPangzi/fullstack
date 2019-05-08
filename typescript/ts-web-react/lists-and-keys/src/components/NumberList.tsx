import React, {FC} from "react";

interface NumberListProp {
    numbers: number[];
}

export const NumberList: FC<NumberListProp> = ({numbers}) => (
    <ul>
        {numbers.map((e, i) => <li key={i}>{e}</li>)}
    </ul>
)