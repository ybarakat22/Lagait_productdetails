import React from "react";

type ButtonProps = {
  name: string;
  styles:{};
};
const Button = (props: ButtonProps) => {
  return <button  style={props.styles} type="button">{props.name}</button>;
};

export default Button;
