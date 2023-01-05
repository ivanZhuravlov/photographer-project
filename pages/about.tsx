import { TopColumnPerson, Quote } from "components/sections";
import { withDefaultLayout } from "layouts/DefaultLayout/DefaultLayout";

const About = (): JSX.Element => {
  return (
    <>
      <TopColumnPerson />
      <Quote />
    </>
  );
};

export default withDefaultLayout(About);
