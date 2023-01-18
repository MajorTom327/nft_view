import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import Button from "../components/Button";
import { useWallet } from "../hooks/useWallet";
import { isNilOrEmpty } from "ramda-adjunct";
import Divider from "../components/Divider/Divider";

type Props = {};

export const Connect: React.FC<Props> = ({}) => {
  const { shortWallet, connect } = useWallet();

  const onConnect = () => {
    connect();
  };

  return (
    <>
      <Card>
        <Title h1 center>
          Connect your wallet
        </Title>

        <Divider />

        {isNilOrEmpty(shortWallet) ? (
          <Button onClick={onConnect}>Connect</Button>
        ) : (
          <div className="flex flex-col gap-2 justify-center text-center">
            <Title h2>You are connected through</Title>
            <Title>{shortWallet}</Title>
          </div>
        )}
      </Card>
    </>
  );
};

Connect.defaultProps = {};

export default Connect;
