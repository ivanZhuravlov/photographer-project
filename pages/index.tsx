import { TopColumnImage } from "components/sections";
import { withDefaultLayout } from "layouts/DefaultLayout/DefaultLayout";

const Home = (): JSX.Element => {
  return (
    <>
      <TopColumnImage />
    </>
  );
};

export default withDefaultLayout(Home);
