import React from "react";
import { Helmet } from "react-helmet";

export const SEO = ({ name, occupation, description }) => {
  return (
    <Helmet>
      <title>
        {name} - {occupation}
      </title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
