import { TermsOfServices as TermsOfServicesSection } from "page-components";
import { withDefaultLayout } from "layouts/DefaultLayout/DefaultLayout";

const TermsOfServices = (): JSX.Element => {
  return <TermsOfServicesSection />;
};

export default withDefaultLayout(TermsOfServices);
