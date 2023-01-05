import React from "react";
import styles from "./FrequentlyQuestions.module.scss";
import { PageTitle } from "components/sections";
import { Fade } from "react-awesome-reveal";
import { Accordion } from "components/UI";
import { FrequentlyQuestionsProps } from "./FrequentlyQuestions.props";

const FrequentlyQuestions = ({
  faqs,
}: FrequentlyQuestionsProps): JSX.Element => {
  return (
    <div className={styles["questions-wrapper"]}>
      <Fade direction="up" duration={650} triggerOnce>
        <PageTitle
          title="Frequently asked questions"
          titleCol={7}
          className={styles.questions__title}
        />
        <Accordion className={styles.questions} faqs={faqs} />
      </Fade>
    </div>
  );
};

export default FrequentlyQuestions;
