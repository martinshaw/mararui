/*
All Rights Reserved, (c) 2023 CodeAtlas LTD.

Author: Martin Shaw (developer@martinshaw.co)
File Name: Button.ts
Created:  2023-10-31T01:03:29.983Z
Modified: 2023-10-31T01:03:29.983Z

Description: description
*/

import React, { ReactNode } from "react";

import "./Button.css";

export type ButtonProps = {
  variant?: "confirmation" | "default" | "destructive";
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  text?: string;
};

const Button = (props: ButtonProps): ReactNode => {
  const propsWithDefaults: ButtonProps = {
    variant: "default",
    disabled: false,
    fullWidth: false,
    ...props,
  };

  const classList = [
    "mararui__button",
    `mararui__button--variant-${propsWithDefaults.variant}`,
    propsWithDefaults.disabled ?? "mararui__button--disabled",
    propsWithDefaults.fullWidth ?? "mararui__button--full-width",
  ];
  const className = classList.join(" ");

  return (
    <div className={className}>
      <button tabIndex={0}>
        {propsWithDefaults.icon && <div className="mararui__button__icon">
          {props.icon}
        </div>}
        {propsWithDefaults.text && <div className="mararui__button__text">
          {props.text}
        </div>}
      </button>
    </div>
  );
};

export default Button;
