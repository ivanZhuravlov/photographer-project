import { PrivacyPolicy as PrivacyPolicySection } from "page-components";
import { withDefaultLayout } from "layouts/DefaultLayout/DefaultLayout";

const PrivacyPolicy = (): JSX.Element => {
  return <PrivacyPolicySection />;
};

export default withDefaultLayout(PrivacyPolicy);
