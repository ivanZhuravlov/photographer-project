import React from "react";
import DefaultLayoutProps from "./DefaultLayout.props";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FunctionComponent } from "react";
import { RegularButton } from "components/UI";
import { InView } from "react-intersection-observer";
import TransitionGroupProps from "common/interfaces/TransitionGroupProps";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import { useRouter } from "next/router";

const DefaultLayout = ({
  children,
  withSupport,
  withBookSessionBtn,
  headerType,
}: DefaultLayoutProps): JSX.Element => {
  const router = useRouter();
  const toBooking = () => {
    router.push("/contacts");
  };
  const [isButtonVisible, setIsButtonVisible] = React.useState<boolean>(false);
  const animDuration = 400;
  const btnStyle = {
    transition: `all ${animDuration}ms ease-in-out`,
    transform: "translateY(150px)",
    opacity: 0,
  };
  const transtionSwitchBtn: TransitionGroupProps = {
    entering: { opacity: 0.8, transform: "translateY(0)" },
    entered: { opacity: 1, transform: "translateY(0)" },
    exiting: { opacity: 0.8, transform: "translateY(150px)" },
    exited: { opacity: 0, transform: "translateY(150px)" },
  };
  const interSectionCallback = (isView: boolean) => {
    isView ? setIsButtonVisible(false) : setIsButtonVisible(true);
  };
  return (
    <div className="wrapper">
      <Header type={headerType} />
      {children}
      <InView as="div" onChange={interSectionCallback}>
        <Footer withSupport={withSupport} />
      </InView>
      <div style={{ display: !withBookSessionBtn ? "none" : "block" }}>
        <Transition in={isButtonVisible} timeout={animDuration}>
          {(status: TransitionStatus): JSX.Element => (
            <RegularButton
              style={{
                ...btnStyle,
                ...transtionSwitchBtn[status],
              }}
              white
              fixed
              onClick={toBooking}
            >
              Book a session
            </RegularButton>
          )}
        </Transition>
      </div>
    </div>
  );
};

export const withDefaultLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
  withSupport = true,
  withBookSessionBtn = true,
  headerType = "default"
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <DefaultLayout
        withBookSessionBtn={withBookSessionBtn}
        withSupport={withSupport}
        headerType={headerType}
      >
        <Component {...props} />
      </DefaultLayout>
    );
  };
};
