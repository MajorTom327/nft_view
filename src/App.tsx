import React from "react";

type Props = {};

export const App: React.FC<Props> = ({}) => {
  return (
    <>
      <h1 className="text-red-500">Hello Friend</h1>
    </>
  );
};

App.defaultProps = {};

export default App;
