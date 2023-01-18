import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Layout from "./components/Layout/Layout";
import Title from "./components/Title";

type Props = {};

export const App: React.FC<Props> = ({}) => {
  return (
    <>
      <Layout>
        <div className="container mx-auto">
          <Card>
            <Title h1>Hello Friend</Title>
            <Button variant="secondary">GM</Button>
          </Card>
        </div>
      </Layout>
    </>
  );
};

App.defaultProps = {};

export default App;
