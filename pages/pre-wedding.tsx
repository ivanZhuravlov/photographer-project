import { PreWeddingParallax, PreWeddingGallery } from "components/sections";
import { withDefaultLayout } from "layouts/DefaultLayout/DefaultLayout";

const PreWedding = (): JSX.Element => {
  return (
    <>
      <PreWeddingParallax />
      <PreWeddingGallery />
    </>
  );
};

export default withDefaultLayout(PreWedding);
