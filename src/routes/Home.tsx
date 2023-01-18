import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";

type Props = {};

export const Home: React.FC<Props> = ({}) => {
  return (
    <>
      <Card>
        <Title h1>Hello Friend</Title>
        <div className="flex gap-2">
          <Button variant="primary">GM Primary</Button>
          <Button variant="secondary">GM Secondary</Button>
          <Button variant="accent">GM Accent</Button>
        </div>
      </Card>
    </>
  );
};

Home.defaultProps = {};

export default Home;
