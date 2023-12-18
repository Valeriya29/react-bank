import React from "react";
import Welcome from "../container/welcomepage";
import Page from "../component/page";

export const WelcomePage: React.FC = () => {
  return (
    <Page className="welcomepage">
      <Welcome />
    </Page>
  );
};