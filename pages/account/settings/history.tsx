import React from "react";
import { withAccountSettingsLayout } from "layouts/AccountSettingsLayout/AccountSettingsLayout";
import { HistorySettings as HistorySettingsSection } from "page-components";

const HistorySettings = (): JSX.Element => {
  return <HistorySettingsSection />;
};

export default withAccountSettingsLayout(HistorySettings);
