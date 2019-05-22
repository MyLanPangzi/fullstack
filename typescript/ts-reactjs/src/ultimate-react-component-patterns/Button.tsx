import React, {ComponentType, FC, MouseEvent} from "react";

const defaultProps = {
    color: 'red'
}
type DefaultProps = typeof defaultProps;
type Props = {
    onClick(e: MouseEvent<HTMLButtonElement>): void;
} & DefaultProps;
export const Button: FC<Props> = ({onClick: handleClick, color, children}) => (
    <button style={{color}} onClick={handleClick}>{children}</button>
)
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
/**
 * 将组件类上的默认属性设置为可选，并设置默认值
 * @param defaultProps 默认属性
 * @param Cmp 组件类
 */
export const withDefaultProps = <P extends {}, DP extends Partial<P> = Partial<P>>(defaultProps: DP, Cmp: ComponentType<P>): ComponentType<Required<Omit<P, keyof DP>> & Partial<DP>> => {
    type Props = Required<Omit<P, keyof DP>> & Partial<DP>;

    Cmp.defaultProps = defaultProps;

    return (Cmp as ComponentType<any>) as ComponentType<Props>;
};
export const ButtonWithDefaultProps = withDefaultProps(defaultProps, Button);