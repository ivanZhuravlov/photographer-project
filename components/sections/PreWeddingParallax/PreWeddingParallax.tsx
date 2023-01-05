import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./PreWeddingParallax.module.scss";
import cn from "classnames";
import { Image, Parallax } from "components/UI";
import Fade from "react-reveal/Fade";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import TransitionGroupProps from "common/interfaces/TransitionGroupProps";
import { InView } from "react-intersection-observer";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const PreWeddingParallax = (): JSX.Element => {
  const [isTitleShow, setIsTitleShow] = React.useState<boolean>(false);
  React.useEffect(() => {
    setIsTitleShow(true);
  }, []);
  const animDuration = 400;
  const TitleStyle = {
    transition: `all ${animDuration}ms ease`,
    opacity: 0,
  };
  const transitionTitle: TransitionGroupProps = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  const interSectionCallback = (isView: boolean) => {
    isView ? setIsTitleShow(false) : setIsTitleShow(true);
  };
  return (
    <section className={styles.wedding}>
      <Container>
        {/* <Transition in={isTitleShow} timeout={animDuration}>
          {(status: TransitionStatus): JSX.Element => (
            <h1
              style={{
                ...TitleStyle,
                ...transitionTitle[status],
              }}
              className={cn(styles.wedding__title, "primary-text", "h4")}
            >
              Pre-wedding
            </h1>
          )}
        </Transition>
        <h1 style={{ opacity: 0 }}>Pre-wedding</h1> */}
        <div className={cn(styles.wedding__row, "justify-content-center")}>
          <Fade bottom distance="200px" delay={2000} duration={1000}>
            <div>
              <Parallax
                divisionBy={6}
                className="d-flex justify-content-center"
              >
                <Image
                  className={styles.wedding__img1}
                  src={`${api}/storage/images/pages/wedding/wedding-1.png`}
                  srcWebp={`${api}/storage/images/pages/wedding/wedding-1.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div
          className={cn(
            styles.wedding__row,
            styles["wedding__row_column-m"],
            "justify-content-between"
          )}
        >
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax divisionBy={3.5}>
                <Image
                  className={styles.wedding__img2}
                  src={`${api}/storage/images/pages/wedding/wedding-2.png`}
                  srcWebp={`${api}/storage/images/pages/wedding/wedding-2.webp`}
                />
              </Parallax>
            </div>
          </Fade>
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax divisionBy={5}>
                <Image
                  className={styles.wedding__img3}
                  src={`${api}/storage/images/pages/wedding/wedding-3.png`}
                  srcWebp={`${api}/storage/images/pages/wedding/wedding-3.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div
          className={cn(styles.wedding__row, styles["wedding__row_column-m"])}
        >
          <Fade bottom distance="100px" duration={600}>
            <div>
              <Parallax divisionBy={5}>
                <Image
                  className={styles.wedding__img4}
                  src={`${api}/storage/images/pages/wedding/wedding-4.png`}
                  srcWebp={`${api}/storage/images/pages/wedding/wedding-4.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div
          className={cn(
            styles.wedding__row,
            styles["wedding__row_column-m"],
            "justify-content-center"
          )}
        >
          <Fade bottom distance="100px" duration={600}>
            <div>
              <Parallax divisionBy={4}>
                <Image
                  className={styles.wedding__img5}
                  src={`${api}/storage/images/pages/wedding/wedding-5.png`}
                  srcWebp={`${api}/storage/images/pages/wedding/wedding-5.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={(styles.wedding__row, "justify-content-end")}>
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax divisionBy={4}>
                <Image
                  className={styles.wedding__img6}
                  src={`${api}/storage/images/pages/wedding/wedding-6.png`}
                  srcWebp={`${api}/storage/images/pages/wedding/wedding-6.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={cn(styles.wedding__row)}>
          <Fade bottom duration={600}>
            <div>
              <Parallax divisionBy={4}>
                <Image
                  className={styles.wedding__img7}
                  src={`${api}/storage/images/pages/wedding/wedding-7.png`}
                  srcWebp={`${api}/storage/images/pages/wedding/wedding-7.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={cn(styles.wedding__row, "justify-content-center")}>
          <Fade bottom distance="100px" duration={600}>
            <div>
              <Parallax divisionBy={6}>
                <Image
                  className={styles.wedding__img8}
                  src={`${api}/storage/images/pages/wedding/wedding-8.png`}
                  srcWebp={`${api}/storage/images/pages/wedding/wedding-8.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div
          className={cn(
            styles.wedding__row,
            styles["wedding__row_column-m"],
            "justify-content-end"
          )}
        >
          <Fade bottom distance="100px" duration={600}>
            <div>
              <Parallax divisionBy={8}>
                <Image
                  className={styles.wedding__img9}
                  src={`${api}/storage/images/pages/wedding/wedding-9.png`}
                  srcWebp={`${api}/storage/images/pages/wedding/wedding-9.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={cn(styles.wedding__row, "justify-content-center")}>
          <Fade bottom distance="100px" duration={600}>
            <div>
              <Parallax divisionBy={12}>
                <Image
                  className={styles.wedding__img10}
                  src={`${api}/storage/images/pages/wedding/wedding-10.png`}
                  srcWebp={`${api}/storage/images/pages/wedding/wedding-10.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <InView onChange={interSectionCallback}>
              <Fade bottom distance="100px" delay={300} duration={600}>
                <div className={styles["wedding__quote-wrapper"]}>
                  <p className={styles.wedding__quote}>
                    <span className={styles.wedding__quote_first}>
                      With a <span className="primary-text">pre-wedding</span>{" "}
                      shoot,
                    </span>{" "}
                    your couple can celebrate{" "}
                    <span className={styles.wedding__quote__italic}>
                      their love story
                      <br />
                    </span>{" "}
                    <span className={styles.wedding__quote_second}>
                      before they officially
                    </span>{" "}
                    <br /> tie the knot!
                  </p>
                </div>
              </Fade>
            </InView>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PreWeddingParallax;
