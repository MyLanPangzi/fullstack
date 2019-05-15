import {ThemeContext} from "./ThemeContext";
import React, {Component} from "react";

export class ThemeButton extends Component<{onClick?():void; }> {
    static contextType = ThemeContext;
    context!: React.ContextType<typeof ThemeContext>;

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <button
                {...this.props}
                style={{backgroundColor: this.context.background}}
            />
        );
    }

}



