import React from "react";
import "./styles.css";
import { Helmet } from "react-helmet";
import Favicon from "./Favicon";

export default function App() {
  return (
    <div className="App">
      <Helmet>
        <title>@awesome!</title>
      </Helmet>

      <Favicon />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
