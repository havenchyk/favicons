import React from "react";
import { Helmet } from "react-helmet";
import { icon16, icon32, icon180 } from "./icons";

const Favicon = () => {
  return (
    <Helmet>
      <title>@This is a title from favicon</title>
      <link rel="apple-touch-icon" sizes="180x180" href={icon180} />
      <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
    </Helmet>
  );
};

export default Favicon;
