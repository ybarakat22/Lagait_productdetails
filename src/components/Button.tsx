import React from "react";

type ButtonProps = {
  name: string;
  class: string;
};
const Button = (props: ButtonProps) => {
  return (
    <button className={props.class} type="button">
      {props.name}
    </button>
  );
};

export default Button;
