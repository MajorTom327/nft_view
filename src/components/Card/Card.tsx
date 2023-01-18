import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => {
  const classes = classNames("p-4 bg-base-lighten");
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
