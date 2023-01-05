import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./TopColumnPerson.module.scss";
import cn from "classnames";
import { Image, Parallax } from "components/UI";
import { Fade } from "react-awesome-reveal";
import { default as FadeAlt } from "react-reveal/Fade";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const TopColumnPerson = (): JSX.Element => {
  return (
    <section className={styles.about}>
      <Container>
        <Row>
          <Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }}>
            <div className={cn(styles.about__info, styles.about__info_desktop)}>
              <h1 className={cn(styles.about__name, "h1")}>
                <Fade triggerOnce direction="up" delay={900} duration={700}>
                  <span>Artem</span>
                </Fade>
                <Fade triggerOnce direction="up" delay={1000} duration={700}>
                  <>Denisov</>
                </Fade>
              </h1>
              <Fade triggerOnce direction="up" delay={1050} duration={700}>
                <p className={cn(styles.about__subtitle, "primary-text")}>
                  I appreciate your ideas, just let me know what you have in
                  mind and we will create it together.
                </p>
              </Fade>
            </div>
            <div className={cn(styles.about__info, styles.about__info_m)}>
              <h1 className={cn(styles.about__name, "h1")}>
                <Fade triggerOnce direction="up" delay={500} duration={700}>
                  <span>Artem</span>
                </Fade>
                <Fade triggerOnce direction="up" delay={600} duration={700}>
                  <>Denisov</>
                </Fade>
              </h1>
              <Fade triggerOnce direction="up" delay={700} duration={700}>
                <p className={cn(styles.about__subtitle, "primary-text")}>
                  I appreciate your ideas, just let me know what you have in
                  mind and we will create it together.
                </p>
              </Fade>
            </div>
          </Col>
          <Col
            className={styles["about__img-col"]}
            xs={{ span: 12, order: 1 }}
            lg={{ span: 5, order: 1 }}
          >
            <div className={styles["about__img-col_desktop"]}>
              <div>
                <FadeAlt delay={1200} duration={700} distance="100px" bottom>
                  {/* <Parallax divisionBy={3.5} startedOn={50}> */}
                  <Image
                    className={styles.about__img}
                    src={`${api}/storage/images/pages/about/about-img.png`}
                    srcWebp={`${api}/storage/images/pages/about/about-img.webp`}
                    alt="Photo"
                  />
                  {/* </Parallax> */}
                </FadeAlt>
              </div>
            </div>
            <Fade
              className={styles["about__img-col_m"]}
              triggerOnce
              delay={1000}
              duration={600}
            >
              <Image
                className={styles.about__img}
                src={`${api}/storage/images/pages/about/about-img.png`}
                srcWebp={`${api}/storage/images/pages/about/about-img.webp`}
                alt="Photo"
              />
            </Fade>
          </Col>
        </Row>
      </Container>
      <Fade triggerOnce direction="up" delay={600} duration={700}>
        <Container>
          <Row>
            <Col lg={2}>
              <h2 className={cn(styles.about__desc__title, "primary-text", "")}>
                About me
              </h2>
            </Col>
            <Col lg={5}>
              <p className={cn(styles.about__desc__text, "body-3")}>
                I started my career back in 2013 as a real estate photographer.
                At that time, I was living and working in Thailand. My company
                needed presentations of the properties we worked with, but the
                result given by local photographers did not satisfy us. I
                started to study photography, photoshop and started taking
                pictures of our villas. I was lucky we had more than 50 objects
                in the work and after finishing shooting I continued to study.
                Having studied the new materials, I started photographing again.
              </p>
            </Col>
            <Col lg={5}>
              <p className={cn(styles.about__desc__text, "body-3")}>
                Later I became interested in portrait photography. I like
                working with people to catch their emotions and mood. My
                favorite genre is story photography, I like making up a story in
                pictures. I don't make just photos, I offer to create your photo
                story. Together with you, we will come up with a theme for a
                photo session (picnic, love story, a date, etc.), select a
                location, costumes and accessories. After the photo session,
                together we will determine the style and toning of future
                photos.
              </p>
            </Col>
          </Row>
        </Container>
      </Fade>
    </section>
  );
};

export default TopColumnPerson;
