import React from "react";
import Wellcome from "../container/welcomepage";
import Page from "../component/page";

export const WelcomePage: React.FC = () => {
  return (
    <Page className="welcomepage">
      <Wellcome />
    </Page>
  );
};