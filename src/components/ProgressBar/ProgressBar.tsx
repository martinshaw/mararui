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
  value?: number;
  variant?: "active" | "default" | "destructive";
  disabled?: boolean;
  showValue?: boolean;
  text?: string;
};

type ProgressBarPropsWithDefaults = {
  value: number;
  variant: "active" | "default" | "destructive";
  disabled: boolean;
  showValue: boolean;
  text?: string;
};

const ProgressBar = (props: ProgressBarProps): ReactNode => {
  const propsWithDefaults: ProgressBarPropsWithDefaults = {
    value: 0,
    variant: "default",
    disabled: false,
    showValue: true,
    ...props,
  };

  const classList = [
    "mararui__progress-bar",
    `mararui__progress-bar--variant-${propsWithDefaults.variant}`,
    propsWithDefaults.disabled == true ? "mararui__progress-bar--disabled" : "",
    propsWithDefaults.text != null ? "mararui__progress-bar--with-text" : "",
  ];
  const className = classList.join(" ");

  const [progressValueAsPercentage, setProgressValueAsPercentage] =
    React.useState<number>(0);
  React.useEffect(() => {
    if (propsWithDefaults.value >= 0.05 && propsWithDefaults.value <= 1) {
      setProgressValueAsPercentage(propsWithDefaults.value * 100);
      return;
    }

    setProgressValueAsPercentage(0);
  }, [propsWithDefaults.value]);

  return (
    <div className={className}>
      <div className="mararui__progress-bar__bar">
        <div
          className="mararui__progress-bar__bar__inner"
          style={{
            width: progressValueAsPercentage + "%",
            opacity: progressValueAsPercentage === 0 ? 0 : 1,
          }}
        ></div>
      </div>
      {propsWithDefaults.text != null ? (
        <div className="mararui__progress-bar__caption">
          <div className="mararui__progress-bar__caption__text">
            {propsWithDefaults.text}
          </div>
          {propsWithDefaults.showValue && (
            <div className="mararui__progress-bar__caption__value">
              {progressValueAsPercentage}%
            </div>
          )}
        </div>
      ) : (
        <>
          {propsWithDefaults.showValue && (
            <div className="mararui__progress-bar__value">
              {progressValueAsPercentage}%
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProgressBar;
