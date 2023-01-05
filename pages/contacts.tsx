import { ContactForm, InstagramGallery } from "components/sections";
import { withDefaultLayout } from "layouts/DefaultLayout/DefaultLayout";

const withSupport = false;
const Contacts = (): JSX.Element => {
  return (
    <>
      <ContactForm />
      <InstagramGallery />
    </>
  );
};

export default withDefaultLayout(Contacts, withSupport);
