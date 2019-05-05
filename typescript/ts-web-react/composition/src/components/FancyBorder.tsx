import React, {FC} from "react";

interface FancyBorderProp {
    color: string;
}

export const FancyBorder: FC<FancyBorderProp> = ({color, children}) => (
    <div className={`FancyBorder FancyBorder-${color}`}>
        {children}
    </div>
);