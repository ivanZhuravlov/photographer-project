import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Quote.module.scss";
import { Fade } from "react-awesome-reveal";
import { Image } from "components/UI";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const Quote = (): JSX.Element => {
  return (
    <section className={styles.quote}>
      <Fade
        direction="up"
        delay={400}
        duration={1200}
        fraction={0.1}
        triggerOnce
      >
        <Image
          src={`${api}/storage/images/pages/about/about-img-2.png`}
          srcWebp={`${api}/storage/images/pages/about/about-img-2.webp`}
          className={styles.quote__img}
          alt="Photo"
        />
      </Fade>
      <Container className={styles.quote__container}>
        <Fade delay={600} duration={650} triggerOnce>
          <Row>
            <Col className={styles.quote__col} sm={12}>
              <p className={styles.quote__desc}>
                You can look at a picture for a week and never think of it
                again. You can also look at a picture for a second and think of
                it all your life.
              </p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Quote;
