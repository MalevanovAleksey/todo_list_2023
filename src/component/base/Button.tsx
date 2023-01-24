import React from "react";
import { ButtonProps } from "../../interfaces/base/ButtonProps";
export const Button: React.FC<ButtonProps> = ({
  useDefaultClassName = true,
  className,
  children,
  onClick,
  ...props
}) => {
  const buttonClassNames = useDefaultClassName
    ? `base-button ${className}`
    : className;
  return (
    <button onClick={onClick} className={buttonClassNames}>
      {children}
    </button>
  );
};
