import React from "react";

type ButtonProps = {
  name: string;
};
const Button = (props: ButtonProps) => {
  return <button type="button">{props.name}</button>;
};

export default Button;
