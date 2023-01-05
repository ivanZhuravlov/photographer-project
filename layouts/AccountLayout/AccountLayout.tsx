import React from "react";
import { AccountLayoutProps } from "./AccountLayout.props";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FunctionComponent } from "react";
import Redirect from "common/redirect";
import { useRouter } from "next/router";

const AccountLayout = ({
  children,
  headerType,
}: AccountLayoutProps): JSX.Element | null => {
  const router = useRouter();
  if (
    typeof window !== "undefined" &&
    !localStorage.getItem("token") &&
    router.route !== "/account/activation"
  ) {
    console.log(router);

    return <Redirect to="/" />;
  }

  return (
    <div className="wrapper">
      <Header type={headerType} />
      {children}
      <Footer />
    </div>
  );
};

export const withAccountLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
  headerType = "with-auth"
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AccountLayout headerType={headerType}>
        <Component {...props} />
      </AccountLayout>
    );
  };
};
