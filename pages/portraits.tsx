import {
  PortraitsParallax,
  PortraitsGallery,
} from "components/sections";
import { withDefaultLayout } from "layouts/DefaultLayout/DefaultLayout";

const Portraits = (): JSX.Element => {
  return (
    <>
      <PortraitsParallax />
      <PortraitsGallery />
    </>
  );
};

export default withDefaultLayout(Portraits);
