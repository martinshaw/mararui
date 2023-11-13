/*
All Rights Reserved, (c) 2023 CodeAtlas LTD.

Author: Martin Shaw (developer@martinshaw.co)
File Name: Header.ts
Created:  2023-10-31T01:03:29.983Z
Modified: 2023-10-31T01:03:29.983Z

Description: description
*/

import React, { ReactNode } from "react";

import "./Header.scss";

export type HeaderProps = {
  padding?: "none" | "small";
  size?: "small" | "medium" | "large";
  text?: string;
  children?: ReactNode;
};

type HeaderPropsWithDefaults = {
  padding: "none" | "small";
  size: "small" | "medium" | "large";
  text?: string;
  children?: ReactNode;
};

const Header = (props: HeaderProps): ReactNode => {
  const propsWithDefaults: HeaderPropsWithDefaults = {
    padding: "small",
    size: "medium",
    ...props,
  };

  const classList = [
    "mararui__header",
    `mararui__header--padding-${propsWithDefaults.padding}`,
    `mararui__header--size-${propsWithDefaults.size}`,
    propsWithDefaults.text != null && propsWithDefaults.children != null
      ? "mararui__header--with-children"
      : "",
  ];
  const className = classList.join(" ");

  return (
    <div className={className}>
      {propsWithDefaults.text && (
        <div className="mararui__header__text">
          {propsWithDefaults.text}
        </div>
      )}
      {propsWithDefaults.children && (
        <div className="mararui__header__children">
          {propsWithDefaults.children}
        </div>
      )}
    </div>
  );
};

export default Header;
