import React from "react";
import { withAccountLayout } from "layouts/AccountLayout/AccountLayout";
import { AccountActivation } from "page-components";

const headerType = "without-auth";

const Activation = (): JSX.Element => {
  return <AccountActivation />;
};

export default withAccountLayout(Activation, headerType);
