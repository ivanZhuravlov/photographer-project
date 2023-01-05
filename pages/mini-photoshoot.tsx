import {
  Questions,
  FrequentlyQuestions,
  TopColumnInfo,
  Locations,
} from "components/sections";
import { withDefaultLayout } from "layouts/DefaultLayout/DefaultLayout";
import { GetStaticProps } from "next";
import {
  LocationItem,
  LocationsProps,
  LocationsRequest,
} from "common/interfaces/LocationsProps";
import axios from "axios";
import {
  FrequentlyQuestionItem,
  FrequentlyQuestionsRequest,
} from "@/components/sections/FrequentlyQuestions/FrequentlyQuestions.props";
import {
  QuestionItem,
  QuestionsRequestProps,
} from "@/components/sections/Questions/Questions.props";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const withSupport = false;
const withBookSessionBtn = false;

const MiniPhotoShoot = ({
  locations,
  faqs,
  questions,
}: LocationsRequest): JSX.Element => {
  return (
    <>
      <TopColumnInfo />
      <div id="locations">
        <Locations locations={locations} />
      </div>
      <Questions
        sectionTitle={
          <>
            how <span>is the</span> <br />
            process going?
          </>
        }
        img={`${api}/storage/images/pages/mini-photoshoot/mini-photoshoot.png`}
        imgWebp={`${api}/storage/images/pages/mini-photoshoot/mini-photoshoot.webp`}
        questions={questions}
      />
      <FrequentlyQuestions faqs={faqs} />
    </>
  );
};

export default withDefaultLayout(
  MiniPhotoShoot,
  withSupport,
  withBookSessionBtn
);

export const getStaticProps: GetStaticProps<LocationsProps> = async () => {
  let locations: LocationItem[] = [];
  let faqs: FrequentlyQuestionItem[] = [];
  let questions: QuestionItem[] = [];
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
    .request<LocationItem[]>({
      method: "GET",
      url: `${api}/api/locations`,
    })
    .then(({ data }) => {
      locations = data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      locations,
      questions,
      faqs,
    },
  };
};
