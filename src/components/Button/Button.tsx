import React from "react";
import ButtonStyled from "./ButtonStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface ButtonProps {
  type?: "button" | "submit";
  modifiers?: ("small" | "medium" | "medium-expanded")[];
  actionOnClick?: () => void;
  text?: string;
  icon?: IconDefinition;
  label?: string;
  isDisabled?: boolean;
}

const Button = ({
  type = "button",
  modifiers,
  actionOnClick,
  icon,
  text,
  isDisabled,
  label,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      aria-label={label}
      disabled={isDisabled}
      className={`button ${
        modifiers
          ? modifiers.map((modifier) => "button--" + modifier).join(" ")
          : ""
      }`}
      onClick={actionOnClick}
      type={type}
    >
      {text}
      {icon && <FontAwesomeIcon className="down-arrow" icon={icon} />}
    </ButtonStyled>
  );
};

export default Button;
