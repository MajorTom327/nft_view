import classNames from "classnames";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children, className }) => {
  const classes = classNames("p-4 bg-base-lighten", className);
  const classesContainer = classNames(
    "p-1 bg-gradient-to-br from-primary-lighten via-accent to-secondary-darken rounded-md shadow-md"
  );

  return (
    <>
      <div className={classesContainer}>
        <div className={classes}>{children}</div>
      </div>
    </>
  );
};

Card.defaultProps = {};

export default Card;
