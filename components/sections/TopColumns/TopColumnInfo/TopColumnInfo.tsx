import { RegularButton } from "components/UI";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./TopColumnInfo.module.scss";
import cn from "classnames";
import { Image } from "components/UI";
import AnchorLink from "react-anchor-link-smooth-scroll";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const TopColumnInfo = (): JSX.Element => {
  return (
    <section className={styles["top-column-info"]}>
      <Container>
        <Row>
          <Col xs={12} md={8} className={styles["top-column-info__text"]}>
            <h1 className={cn(styles["top-column-info__title"], "h2")}>
              mini photoshoot
            </h1>
            <ul className={styles["top-column-info__list"]}>
              <li className={styles["top-column-info__list__item"]}>
                choose a location where you want to shoot
              </li>
              <li className={styles["top-column-info__list__item"]}>
                pick up date and time for shooting
              </li>
              <li className={styles["top-column-info__list__item"]}>
                enjoy your photoshoot
              </li>
            </ul>
            <AnchorLink offset="50" href="#locations">
              <RegularButton white monochrome>
                Book now
              </RegularButton>
            </AnchorLink>
          </Col>
        </Row>
      </Container>
      <Image
        className={styles["top-column-info__bg"]}
        src={`${api}/storage/images/pages/mini-photoshoot/mini-photoshoot-top-column.png`}
        srcWebp={`${api}/storage/images/pages/mini-photoshoot/mini-photoshoot-top-column.webp`}
      />
      <Image
        className={styles["top-column-info__bg-m"]}
        src={`${api}/storage/images/pages/mini-photoshoot/mini-photoshoot-top-column-m.png`}
        srcWebp={`${api}/storage/images/pages/mini-photoshoot/mini-photoshoot-top-column-m.webp`}
      />
    </section>
  );
};

export default TopColumnInfo;
