import React from "react";
import { QuestionsProps, QuestionItem } from "./Questions.props";
import { PageTitle } from "components/sections";
import styles from "./Questions.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Image } from "components/UI";
import cn from "classnames";
import { Fade } from "react-awesome-reveal";
import parse from "html-react-parser";

const Questions = ({
  sectionTitle,
  img,
  imgWebp,
  questions,
}: QuestionsProps): JSX.Element => {
  return (
    <div className={styles["questions-wrapper"]}>
      <Fade direction="up" delay={200} duration={650} triggerOnce>
        <PageTitle
          className={styles.questions__title}
          title={sectionTitle}
          titleCol={12}
        />
      </Fade>
      <section className={styles.questions}>
        <Fade direction="up" duration={650} triggerOnce>
          <Image
            src={img}
            srcWebp={imgWebp}
            className={styles.questions__img}
          />
        </Fade>
        <Fade direction="up" duration={650} triggerOnce>
          <Container>
            <Row>
              {questions &&
                questions.map((el: QuestionItem) => (
                  <Col key={el.number} xl={4} sm={6}>
                    <div className={styles.questions__card}>
                      <span
                        className={cn(styles.questions__card__number, "h3")}
                      >
                        0{el.number}
                      </span>
                      <h3 className={cn(styles.questions__card__title, "h3")}>
                        {parse(el.title)}
                      </h3>
                      <p className={cn(styles.questions__card__desc, "body-3")}>
                        {el.desc}
                      </p>
                    </div>
                  </Col>
                ))}
            </Row>
          </Container>
        </Fade>
      </section>
    </div>
  );
};

export default Questions;
