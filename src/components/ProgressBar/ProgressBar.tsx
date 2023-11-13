/*
All Rights Reserved, (c) 2023 CodeAtlas LTD.

Author: Martin Shaw (developer@martinshaw.co)
File Name: ProgressBar.ts
Created:  2023-10-31T01:03:29.983Z
Modified: 2023-10-31T01:03:29.983Z

Description: description
*/

import React, { ReactNode } from "react";

import "./ProgressBar.scss";

export type ProgressBarProps = {
  progress?: number;
  variant?: "active" | "default" | "destructive";
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  text?: string;
};

type ProgressBarPropsWithDefaults = {
  progress: number;
  variant: "active" | "default" | "destructive";
  disabled: boolean;
  fullWidth: boolean;
  icon?: ReactNode;
  text?: string;
};

const ProgressBar = (props: ProgressBarProps): ReactNode => {
  const propsWithDefaults: ProgressBarPropsWithDefaults = {
    progress: 0,
    variant: "default",
    disabled: false,
    fullWidth: false,
    ...props,
  };

  const classList = [
    "mararui__progress-bar",
    `mararui__progress-bar--variant-${propsWithDefaults.variant}`,
    propsWithDefaults.disabled == true ? "mararui__progress-bar--disabled" : "",
    propsWithDefaults.fullWidth == true
      ? "mararui__progress-bar--full-width"
      : "",
  ];
  const className = classList.join(" ");

  const [progressValueAsPercentage, setProgressValueAsPercentage] =
    React.useState<number>(0);
  React.useEffect(() => {
    if (propsWithDefaults.progress >= 0.05 && propsWithDefaults.progress <= 1) {
      setProgressValueAsPercentage(propsWithDefaults.progress * 100);
      return;
    }

    setProgressValueAsPercentage(0);
  }, [propsWithDefaults.progress]);

  return (
    <div className={className}>
      <div
        className="mararui__progress-bar__inner"
        style={{
          width: progressValueAsPercentage + "%",
          opacity: progressValueAsPercentage === 0 ? 0 : 1,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
