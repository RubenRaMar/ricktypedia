import React from "react";
import ButtonStyled from "./ButtonStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface ButtonProps {
  type?: "button" | "submit";
  modifier?: ("small" | "medium" | "medium-expanded")[];
  actionOnClick?: () => void;
  text?: string;
  icon?: IconDefinition;
  label?: string;
  isDisabled?: boolean;
}

const Button = ({
  type = "button",
  modifier,
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
        modifier?.includes("small") ? "button--small" : ""
      } ${modifier?.includes("medium") ? "button--medium" : ""} ${
        modifier?.includes("medium-expanded") ? "button--medium-expanded" : ""
      }`}
      onClick={actionOnClick}
      type={type}
    >
      {text}
      {icon && <FontAwesomeIcon icon={icon} />}
    </ButtonStyled>
  );
};

export default Button;
