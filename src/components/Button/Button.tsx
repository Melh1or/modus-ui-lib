import React from "react";
import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  title: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  title,
  ...props
}) => {
  return (
    <button title={title} className={`button button-${variant}`} {...props} />
  );
};
