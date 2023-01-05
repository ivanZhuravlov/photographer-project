import React from "react";
import styles from "./AdminHeader.module.scss";
import { Container } from "react-bootstrap";
import { Avatar, Logo } from "components/UI/icons";
import Link from "next/link";
import cn from "classnames";
import Fade from "react-reveal/Fade";

const Header = (): JSX.Element => {
  return (
    <header className={styles["header-wrapper"]}>
      <Fade delay={200} top>
        <div className={styles.header}>
          <Container className={styles.header__container}>
            <Fade top delay={700} duration={180}>
              <Link href="/">
                <a className={styles.header__logo}>
                  <Logo />
                </a>
              </Link>
            </Fade>
            <div className={styles.header__auth}>
              <Fade distance="35px" top delay={700} duration={250}>
                <div className={styles.header__auth__info}>
                  <span className={cn(styles.header__auth__username, "body-3")}>
                    admin
                  </span>
                  <Avatar className={styles.header__auth__avatar} />
                </div>
              </Fade>
            </div>
          </Container>
        </div>
      </Fade>
    </header>
  );
};

export default Header;
