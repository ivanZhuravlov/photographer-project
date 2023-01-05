import { SpacesParallax, SpacesGallery } from "components/sections";
import { withDefaultLayout } from "layouts/DefaultLayout/DefaultLayout";

const Spaces = (): JSX.Element => {
  return (
    <>
      <SpacesParallax />
      <SpacesGallery />
    </>
  );
};

export default withDefaultLayout(Spaces);
