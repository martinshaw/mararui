/*
All Rights Reserved, (c) 2023 CodeAtlas LTD.

Author: Martin Shaw (developer@martinshaw.co)
File Name: Pane.ts
Created:  2023-10-31T01:03:29.983Z
Modified: 2023-10-31T01:03:29.983Z

Description: description
*/

import React, { ReactNode } from "react";

import "./Pane.scss";

export type PaneProps = {
  vertical?: 'top' | 'center' | 'bottom';
  horizontal?: 'left' | 'center' | 'right';
  direction?: 'row' | 'column';
  padding?: 'none' | 'small' | 'medium' | 'large' | 'extralarge';
  fill?: boolean;
  children?: ReactNode;
}

type PanePropsWithDefaults = {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
  direction: 'row' | 'column';
  padding: 'none' | 'small' | 'medium' | 'large' | 'extralarge';
  fill: boolean;
  children?: ReactNode;
}

const Pane = (props: PaneProps): ReactNode => {
  const propsWithDefaults: PanePropsWithDefaults = {
    vertical: 'center',
    horizontal: 'center',
    direction: 'row',
    padding: 'none',
    fill: false,
    ...props
  }

  const classList = [
    'mararui__pane',
    `mararui__pane--vertical-${propsWithDefaults.vertical}`,
    `mararui__pane--horizontal-${propsWithDefaults.horizontal}`,
    `mararui__pane--direction-${propsWithDefaults.direction}`,
    `mararui__pane--padding-${propsWithDefaults.padding}`,
    propsWithDefaults.fill == true ? 'mararui__pane--fill' : ''
  ]
  const className = classList.join(' ');

  return (
    <div className={className}>
      {propsWithDefaults.children}
    </div>
  )
};

export default Pane;