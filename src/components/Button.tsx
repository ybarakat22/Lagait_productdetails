import React from "react";

type ButtonProps = {
  name: string;
  class: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;

};
const Button = (props: ButtonProps) => {
  return (
    <button className={props.class} type="button" onClick={(event) => props.handleClick(event)}>
      {props.name}
    </button>
  );
};

export default Button;
