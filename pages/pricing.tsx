import {
  PageTitle,
  Sessions,
  Questions,
  FrequentlyQuestions,
} from "components/sections";
import { withDefaultLayout } from "layouts/DefaultLayout/DefaultLayout";
import { GetStaticProps } from "next";
import { SessionItem, PricingProps } from "common/interfaces/SessionsProps";
import {
  QuestionItem,
  QuestionsRequestProps,
} from "components/sections/Questions/Questions.props";
import axios from "axios";
import {
  FrequentlyQuestionItem,
  FrequentlyQuestionsRequest,
} from "@/components/sections/FrequentlyQuestions/FrequentlyQuestions.props";
import { Fade } from "react-awesome-reveal";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const Pricing = ({ sessions, questions, faqs }: PricingProps): JSX.Element => {
  return (
    <div className="pricing-top-column">
      <Fade triggerOnce delay={700} duration={1000}>
        <>
          <PageTitle
            title={
              <>
                Pricing <br /> <span>for</span> sessions
              </>
            }
            desc="Lets create your photo story together! We will come up with a theme for a photo session, select a location, define your total look. After the photo session, together we will determine the style and toning of future photos."
          />
          <Sessions sessions={sessions} />
        </>
      </Fade>

      <Questions
        sectionTitle={
          <>
            how <span>is the</span> <br />
            process going?
          </>
        }
        img={`${api}/storage/images/pages/pricing/pricing.png`}
        imgWebp={`${api}/storage/images/pages/pricing/pricing.webp`}
        questions={questions}
      />
      {/* <FrequentlyQuestions faqs={faqs} /> */}
    </div>
  );
};

export default withDefaultLayout(Pricing);

export const getStaticProps: GetStaticProps<PricingProps> = async () => {
  let sessions: SessionItem[] = [];
  let questions: QuestionItem[] = [];
  let faqs: FrequentlyQuestionItem[] = [];
  await axios
    .request<FrequentlyQuestionsRequest>({
      method: "GET",
      url: `${api}/api/contents/2`,
    })
    .then(({ data }) => {
      faqs = data.content_array;
    })
    .catch((err) => {
      console.log(err);
    });
  await axios
    .request<QuestionsRequestProps>({
      method: "GET",
      url: `${api}/api/contents/1`,
    })
    .then(({ data }) => {
      questions = data.content_array;
    })
    .catch((err) => {
      console.log(err);
    });

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
      questions,
      faqs,
    },
  };
};
