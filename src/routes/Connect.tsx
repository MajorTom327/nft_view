import React from "react";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";

type Props = {};

export const Connect: React.FC<Props> = ({}) => {
  return (
    <>
      <Card>
        <Title h1 center>
          Connect your wallet
        </Title>
      </Card>
    </>
  );
};

Connect.defaultProps = {};

export default Connect;
