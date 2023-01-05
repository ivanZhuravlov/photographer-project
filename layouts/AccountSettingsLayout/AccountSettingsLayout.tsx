import React, { FunctionComponent } from "react";
import { Container, Row } from "react-bootstrap";

import { AccountSettingsLayoutProps } from "./AccountSettingsLayout.props";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./AccountSettingsLayout.module.scss";

import Fade from "react-reveal/Fade";
import Redirect from "common/redirect";
import AccountSettingsSidebar from "layouts/AccountSettingsSidebar/AccountSettingsSidebar";

const AccountSettingsLayout = ({
  children,
  headerType,
}: AccountSettingsLayoutProps): JSX.Element | null => {
  if (typeof window !== "undefined" && !localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  return (
    <div className="wrapper">
      <Header type={headerType} />
      <Fade delay={300}>
        <section className={styles.settings}>
          <Container>
            <Row>
              <AccountSettingsSidebar />
              {children}
            </Row>
          </Container>
        </section>
      </Fade>
      <Footer />
    </div>
  );
};

export const withAccountSettingsLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
  headerType = "with-auth"
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AccountSettingsLayout headerType={headerType}>
        <Component {...props} />
      </AccountSettingsLayout>
    );
  };
};
