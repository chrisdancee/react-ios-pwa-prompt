import React, { ReactElement } from "react";
import { IconProps } from "./HomeScreenIcon";

const ShareIcon = ({ className, modern }: IconProps): ReactElement => {
  if (modern) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 566 670"
      >
        <path d="M255 12c4-4 10-8 16-8s12 3 16 8l94 89c3 4 6 7 8 12 2 6 0 14-5 19-7 8-20 9-28 2l-7-7-57-60 2 54v276c0 12-10 22-22 22-12 1-24-10-23-22V110l1-43-60 65c-5 5-13 8-21 6a19 19 0 0 1-16-17c-1-7 2-13 7-18l95-91z" />
        <path d="M43 207c16-17 40-23 63-23h83v46h-79c-12 0-25 3-33 13-8 9-10 21-10 33v260c0 13 0 27 6 38 5 12 18 18 30 19l14 1h302c14 0 28 0 40-8 11-7 16-21 16-34V276c0-11-2-24-9-33-8-10-22-13-34-13h-78v-46h75c13 0 25 1 37 4 16 4 31 13 41 27 11 17 14 37 14 57v280c0 20-3 41-15 58a71 71 0 0 1-45 27c-11 2-23 3-34 3H109c-19-1-40-4-56-15-14-9-23-23-27-38-4-12-5-25-5-38V270c1-22 6-47 22-63z" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 120 169"
    >
      <g fill="currentColor">
        <path d="M60 0l28 28-2 2a586 586 0 0 0-4 4L64 15v90h-8V15L38 34l-4-4-2-2L60 0z" />
        <path d="M0 49h44v8H8v104h104V57H76v-8h44v120H0V49z" />
      </g>
    </svg>
  );
};

//#007aff

ShareIcon.defaultProps = {
  modern: false,
  className: "",
};

export default ShareIcon;
