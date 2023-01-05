import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Support.module.scss";
import cn from "classnames";
import { RegularButton } from "components/UI";
import { Facebook, Instagram } from "components/UI/icons";
import { useRouter } from "next/router";

const Support = (): JSX.Element => {
  const router = useRouter();
  const toBooking = () => {
    router.push("/contacts");
  };
  return (
    <>
      <section className={styles.support}>
        <Container>
          <Row>
            <Col xs={12}>
              <h2 className={cn(styles.support__title, "h2")}>
                Let’s <span className="primary-text">work</span> together
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} className={styles["support__btn-col"]}>
              <RegularButton
                onClick={toBooking}
                white
                className={styles.support__btn}
              >
                Book a session
              </RegularButton>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className={styles.support__block}>
                <h3 className={cn(styles.support__block__title, "h3")}>
                  <span className="primary-text">contact</span> me
                </h3>
                <span className={cn(styles.support__block__info, "body-2")}>
                  503-593-3732
                </span>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.support__block}>
                <h3 className={cn(styles.support__block__title, "h3")}>
                  <span className="primary-text">email</span> me
                </h3>
                <span className={cn(styles.support__block__info, "body-2")}>
                  photography@artems.art
                </span>
              </div>
            </Col>
            <Col md={4}>
              <div
                className={cn(
                  styles.support__block,
                  styles["support__block_with-icons"]
                )}
              >
                <h3 className={cn(styles.support__block__title, "h3")}>
                  <span className="primary-text">follow</span> me
                </h3>
                <div className={styles.support__block__social}>
                  <div className={styles.support__block__social__item}>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/artems.art/?utm_medium=copy_link"
                    >
                      <Instagram />
                    </a>
                  </div>
                  <div className={styles.support__block__social__item}>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/Photography.Artems.Art/"
                    >
                      <Facebook />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Support;
