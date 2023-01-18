import React from "react";
import { useRouteError } from "react-router-dom";
import Card from "../Card";
import Title from "../Title";

type Props = {};

export const ErrorBoundary: React.FC<Props> = ({}) => {
  let error: Error = useRouteError() as Error;

  return (
    <div className="container mx-auto flex flex-col gap-2 py-4">
      <Card className="flex flex-col gap-2">
        {error.message.split("\n").map((str, i) => (
          <Title h2={i === 0} key={str}>
            {str}
          </Title>
        ))}
      </Card>
      <Card className="overflow-auto">
        <pre>{error.stack}</pre>
      </Card>
    </div>
  );
};

ErrorBoundary.defaultProps = {};

export default ErrorBoundary;
