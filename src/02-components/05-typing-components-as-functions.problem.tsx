import React from "react";

interface Props {
  className: string;
}

/* @ts-expect-error */
export const Button: React.JSX.Element<Props> = (props) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
