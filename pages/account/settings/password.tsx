import React from "react";
import { withAccountSettingsLayout } from "layouts/AccountSettingsLayout/AccountSettingsLayout";
import { PasswordSettings as PasswordSettingsSection } from "page-components";

const PasswordSettings = (): JSX.Element => {
  return <PasswordSettingsSection />;
};

export default withAccountSettingsLayout(PasswordSettings);
