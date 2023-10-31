import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type?: "button" | "submit";
  modifier?: string;
  actionOnClick?: () => void;
  text: string;
  isDisabled?: boolean;
}

const Button = ({
  type = "button",
  modifier,
  actionOnClick,
  text,
  isDisabled,
}: ButtonProps): React.ReactElement => {
  const modifierButton = modifier ? `button--${modifier}` : "";

  return (
    <ButtonStyled
      disabled={isDisabled}
      className={`button ${modifierButton}`}
      onClick={actionOnClick}
      type={type}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
