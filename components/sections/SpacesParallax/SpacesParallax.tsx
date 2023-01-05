import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./SpacesParallax.module.scss";
import cn from "classnames";
import { Image, Parallax } from "components/UI";
import Fade from "react-reveal/Fade";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import TransitionGroupProps from "common/interfaces/TransitionGroupProps";
import { InView } from "react-intersection-observer";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const SpacesParallax = (): JSX.Element => {
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
    <section className={styles.spaces}>
      <Container>
        {/* <Transition in={isTitleShow} timeout={animDuration}>
          {(status: TransitionStatus): JSX.Element => (
            <h1
              style={{
                ...TitleStyle,
                ...transitionTitle[status],
              }}
              className={cn(styles.spaces__title, "primary-text", "h4")}
            >
              Spaces
            </h1>
          )}
        </Transition>
        <h1 style={{ opacity: 0 }}>Spaces</h1> */}
        <div className={cn(styles.spaces__row, "justify-content-center")}>
          <Fade bottom distance="200px" delay={2000} duration={1000}>
            <div>
              <Parallax
                divisionBy={6}
                className="d-flex justify-content-center"
              >
                <Image
                  className={styles.spaces__img1}
                  src={`${api}/storage/images/pages/spaces/spaces-1.png`}
                  srcWebp={`${api}/storage/images/pages/spaces/spaces-1.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={cn(styles.spaces__row, "justify-content-between")}>
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax
                divisionBy={6}
                className="d-flex justify-content-center"
              >
                <Image
                  className={styles.spaces__img2}
                  src={`${api}/storage/images/pages/spaces/spaces-2.png`}
                  srcWebp={`${api}/storage/images/pages/spaces/spaces-2.webp`}
                />
              </Parallax>
            </div>
          </Fade>
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax
                divisionBy={6}
                className="d-flex justify-content-center"
              >
                <Image
                  className={styles.spaces__img3}
                  src={`${api}/storage/images/pages/spaces/spaces-3.png`}
                  srcWebp={`${api}/storage/images/pages/spaces/spaces-3.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={styles.spaces__row}>
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax
                divisionBy={6}
                className="d-flex justify-content-center"
              >
                <Image
                  className={styles.spaces__img4}
                  src={`${api}/storage/images/pages/spaces/spaces-4.png`}
                  srcWebp={`${api}/storage/images/pages/spaces/spaces-4.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={cn(styles.spaces__row, "justify-content-end")}>
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax
                divisionBy={6}
                className="d-flex justify-content-center"
              >
                <Image
                  className={styles.spaces__img5}
                  src={`${api}/storage/images/pages/spaces/spaces-5.png`}
                  srcWebp={`${api}/storage/images/pages/spaces/spaces-5.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={styles.spaces__row}>
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax
                divisionBy={6}
                className="d-flex justify-content-center"
              >
                <Image
                  className={styles.spaces__img6}
                  src={`${api}/storage/images/pages/spaces/spaces-6.png`}
                  srcWebp={`${api}/storage/images/pages/spaces/spaces-6.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={styles.spaces__row}>
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax
                divisionBy={6}
                className="d-flex justify-content-center"
              >
                <Image
                  className={styles.spaces__img7}
                  src={`${api}/storage/images/pages/spaces/spaces-7.png`}
                  srcWebp={`${api}/storage/images/pages/spaces/spaces-7.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={cn(styles.spaces__row, "justify-content-end")}>
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax
                divisionBy={6}
                className="d-flex justify-content-center"
              >
                <Image
                  className={styles.spaces__img8}
                  src={`${api}/storage/images/pages/spaces/spaces-8.png`}
                  srcWebp={`${api}/storage/images/pages/spaces/spaces-8.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={cn(styles.spaces__row, "justify-content-center")}>
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax
                divisionBy={6}
                className="d-flex justify-content-center"
              >
                <Image
                  className={styles.spaces__img9}
                  src={`${api}/storage/images/pages/spaces/spaces-9.png`}
                  srcWebp={`${api}/storage/images/pages/spaces/spaces-9.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <Row className="justify-content-center">
          <Col xs={12} sm={10}>
            <InView onChange={interSectionCallback}>
              <Fade bottom distance="100px" delay={300} duration={600}>
                <div className={styles["spaces__quote-wrapper"]}>
                  <p className={styles.spaces__quote}>
                    To me, photography <br />
                    is an{" "}
                    <span className={styles.spaces__quote__italic}>
                      art o
                    </span>f{" "}
                    <span className={styles.spaces__quote__italic}>o</span>
                    bservati
                    <span className={styles.spaces__quote__italic}>o</span>n.
                  </p>
                  <p className={styles["spaces__sub-quote"]}>
                    It's ab
                    <span className={styles.spaces__quote__italic}>o</span>
                    ut finding s
                    <span className={styles.spaces__quote__italic}>o</span>
                    mething interesting in an
                  </p>
                  <p className={styles["spaces__quote-space"]}>
                    <span className={styles.spaces__quote__italic}>
                      ordinary
                    </span>
                    <span className="primary-text"> space</span>.
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

export default SpacesParallax;
