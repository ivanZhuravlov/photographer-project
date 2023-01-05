import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./PortraitsParallax.module.scss";
import cn from "classnames";
import { Image, Parallax } from "components/UI";
import Fade from "react-reveal/Fade";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import TransitionGroupProps from "common/interfaces/TransitionGroupProps";
import { InView } from "react-intersection-observer";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const PortraitsParallax = (): JSX.Element => {
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
    <section className={styles.portraits}>
      <Container>
        {/* <Transition in={isTitleShow} timeout={animDuration}>
          {(status: TransitionStatus): JSX.Element => (
            <h1
              style={{
                ...TitleStyle,
                ...transitionTitle[status],
              }}
              className={cn(styles.portraits__title, "primary-text", "h4")}
            >
              Portraits
            </h1>
          )}
        </Transition>
        <h1 style={{ opacity: 0 }}>Portraits</h1> */}
        <div className={cn(styles.portraits__row, "justify-content-center")}>
          <Fade bottom distance="200px" delay={1600} duration={1000}>
            <div>
              <Parallax
                divisionBy={6}
                className="d-flex justify-content-center"
              >
                <Image
                  className={styles.portraits__img1}
                  src={`${api}/storage/images/pages/portraits/portraits-1.png`}
                  srcWebp={`${api}/storage/images/pages/portraits/portraits-1.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div
          className={cn(
            styles.portraits__row,
            styles["portraits__row_column-m"],
            "justify-content-between"
          )}
        >
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax divisionBy={3.5}>
                <Image
                  className={styles.portraits__img2}
                  src={`${api}/storage/images/pages/portraits/portraits-2.png`}
                  srcWebp={`${api}/storage/images/pages/portraits/portraits-2.webp`}
                />
              </Parallax>
            </div>
          </Fade>
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax divisionBy={5}>
                <Image
                  className={styles.portraits__img3}
                  src={`${api}/storage/images/pages/portraits/portraits-3.png`}
                  srcWebp={`${api}/storage/images/pages/portraits/portraits-3.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div
          className={cn(
            styles.portraits__row,
            styles["portraits__row_column-m"]
          )}
        >
          <Fade bottom distance="100px" duration={600}>
            <div>
              <Parallax divisionBy={5}>
                <Image
                  className={styles.portraits__img4}
                  src={`${api}/storage/images/pages/portraits/portraits-4.png`}
                  srcWebp={`${api}/storage/images/pages/portraits/portraits-4.webp`}
                />
              </Parallax>
            </div>
          </Fade>
          <Fade bottom distance="100px" duration={600}>
            <div>
              <Parallax divisionBy={4}>
                <Image
                  className={styles.portraits__img5}
                  src={`${api}/storage/images/pages/portraits/portraits-5.png`}
                  srcWebp={`${api}/storage/images/pages/portraits/portraits-5.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={styles.portraits__row}>
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax divisionBy={4}>
                <Image
                  className={styles.portraits__img6}
                  src={`${api}/storage/images/pages/portraits/portraits-6.png`}
                  srcWebp={`${api}/storage/images/pages/portraits/portraits-6.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={cn(styles.portraits__row, "justify-content-end")}>
          <Fade bottom distance="200px" duration={600}>
            <div>
              <Parallax divisionBy={4}>
                <Image
                  className={styles.portraits__img7}
                  src={`${api}/storage/images/pages/portraits/portraits-7.png`}
                  srcWebp={`${api}/storage/images/pages/portraits/portraits-7.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div
          className={cn(
            styles.portraits__row,
            styles["portraits__row_column-m"],
            "justify-content-between"
          )}
        >
          <Fade bottom distance="100px" duration={600}>
            <div>
              <Parallax divisionBy={6}>
                <Image
                  className={styles.portraits__img8}
                  src={`${api}/storage/images/pages/portraits/portraits-8.png`}
                  srcWebp={`${api}/storage/images/pages/portraits/portraits-8.webp`}
                />
              </Parallax>
            </div>
          </Fade>
          <Fade bottom distance="100px" duration={600}>
            <div>
              <Parallax divisionBy={8}>
                <Image
                  className={styles.portraits__img9}
                  src={`${api}/storage/images/pages/portraits/portraits-9.png`}
                  srcWebp={`${api}/storage/images/pages/portraits/portraits-9.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <div className={cn(styles.portraits__row, "justify-content-center")}>
          <Fade bottom distance="100px" duration={600}>
            <div>
              <Parallax divisionBy={12}>
                <Image
                  className={styles.portraits__img10}
                  src={`${api}/storage/images/pages/portraits/portraits-10.png`}
                  srcWebp={`${api}/storage/images/pages/portraits/portraits-10.webp`}
                />
              </Parallax>
            </div>
          </Fade>
        </div>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <InView onChange={interSectionCallback}>
              <Fade bottom distance="100px" delay={300} duration={600}>
                <div className={styles["portraits__quote-wrapper"]}>
                  <p className={styles.portraits__quote}>
                    <span className={styles.portraits__quote__italic}>
                      A <span className="primary-text">portrait </span>
                    </span>
                    is n
                    <span className={styles.portraits__quote__italic}>o</span>t
                    made in the camera,
                  </p>
                  <p className={styles["portraits__sub-quote"]}>
                    but{" "}
                    <span className={styles.portraits__quote__italic}>o</span>n
                    the other side
                    <span className={styles.portraits__quote__italic}> o</span>f
                    it.
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

export default PortraitsParallax;
