/*
All Rights Reserved, (c) 2023 CodeAtlas LTD.

Author: Martin Shaw (developer@martinshaw.co)
File Name: App.ts
Created:  2023-10-31T01:03:29.983Z
Modified: 2023-10-31T01:03:29.983Z

Description: description
*/

import React, { ReactNode } from "react";

import "./App.css";

export type AppProps = {
  children: ReactNode;
}

const App = (props: AppProps): ReactNode => {
  return (
    <div className="mararui__app">
      {props.children}
    </div>
  )
};

export default App;