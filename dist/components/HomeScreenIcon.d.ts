import { ReactElement } from "react";
export interface IconProps {
    className: string;
    modern: boolean;
}
declare const HomeScreenIcon: {
    ({ className, modern }: IconProps): ReactElement;
    defaultProps: {
        modern: boolean;
        className: string;
    };
};
export default HomeScreenIcon;
