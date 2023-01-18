import classNames from "classnames";
import React from "react";

type Props = {
  darken?: boolean;
  lighten?: boolean;
};

export const Divider: React.FC<Props> = ({ darken, lighten }) => {
  const classes = classNames("border w-full my-2 ", {
    "border-base": !darken && !lighten,
    "border-base-darken": darken,
    "border-base-lighten": lighten,
  });
  return (
    <>
      <div className={classes}></div>
    </>
  );
};

Divider.defaultProps = {};

export default Divider;
