import React from "react";
export interface IconProps {
    className: string;
    modern: boolean;
}
declare const HomeScreenIcon: {
    ({ className, modern }: IconProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    defaultProps: {
        modern: boolean;
        className: string;
    };
};
export default HomeScreenIcon;
