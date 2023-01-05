import { Sessions } from "components/sections";
import { withDefaultLayout } from "layouts/DefaultLayout/DefaultLayout";
import { GetStaticProps } from "next";
import { SessionItem, SessionsProps } from "common/interfaces/SessionsProps";
import axios from "axios";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const withSupport = false;
const withBookSessionBtn = false;
const Booking = ({ sessions }: SessionsProps): JSX.Element => {
  return (
    <div className="pricing-top-column">
      <Sessions withSteps sessions={sessions} />
    </div>
  );
};

export default withDefaultLayout(Booking, withSupport, withBookSessionBtn);

export const getStaticProps: GetStaticProps<SessionsProps> = async () => {
  let sessions: SessionItem[] = [];

  await axios
    .request<SessionItem[]>({
      method: "GET",
      url: `${api}/api/packages`,
    })
    .then(({ data }) => {
      sessions = data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      sessions,
    },
  };
};
