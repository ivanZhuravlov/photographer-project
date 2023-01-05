import React from "react";
import { withAccountSettingsLayout } from "layouts/AccountSettingsLayout/AccountSettingsLayout";
import { PersonalSettings as PersonalSettingsSection } from "page-components";

const PersonalSettings = (): JSX.Element => {
  return <PersonalSettingsSection />;
};

export default withAccountSettingsLayout(PersonalSettings);
