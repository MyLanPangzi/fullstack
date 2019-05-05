import React, {FC, ReactElement} from "react";

interface SplitPanelProp {
    left: ReactElement;
    right: ReactElement;
}

export const SplitPanel: FC<SplitPanelProp> = ({left, right}) => (
    <div className='SplitPane'>
        <div className='SplitPane-left'>
            {left}
        </div>
        <div className='SplitPane-right'>
            {right}
        </div>
    </div>
);
export const Cantacts: FC = () => (
    <div className='Contacts'></div>
);
export const Chat: FC = () => (
    <div className='Chat'></div>
)