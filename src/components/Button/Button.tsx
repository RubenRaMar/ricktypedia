import React from "react";
import ButtonStyled from "./ButtonStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface ButtonProps {
  type?: "button" | "submit";
  modifier?: "small";
  actionOnClick?: () => void;
  content: string | IconDefinition;
  isDisabled?: boolean;
}

const Button = ({
  type = "button",
  modifier,
  actionOnClick,
  content,
  isDisabled,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      disabled={isDisabled}
      className={`button ${modifier ? `button--${modifier}` : ""}`}
      onClick={actionOnClick}
      type={type}
    >
      {typeof content === "string" ? (
        content
      ) : (
        <FontAwesomeIcon icon={content} />
      )}
    </ButtonStyled>
  );
};

export default Button;
