import { ReactElement } from "react";
import { IconProps } from "./HomeScreenIcon";
declare const ShareIcon: {
    ({ className, modern }: IconProps): ReactElement;
    defaultProps: {
        modern: boolean;
        className: string;
    };
};
export default ShareIcon;
