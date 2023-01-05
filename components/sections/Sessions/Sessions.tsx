import { RegularButton, TextButton } from "components/UI";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Sessions.module.scss";
import cn from "classnames";
import { SessionsProps, SessionItem } from "common/interfaces/SessionsProps";
import { useRouter } from "next/router";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import TransitionGroupProps from "common/interfaces/TransitionGroupProps";
import { useForm, SubmitHandler } from "react-hook-form";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import { Inputs } from "./SecondStep/SecondStep.props";
import ThirdStep from "./ThirdStep/ThirdStep";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "hooks/useTypedSelector";
import { getCurrentStep, clearCurrentStep } from "store/actions/booking";
import axios from "axios";
import { toast } from "react-toastify";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const steps = [
  {
    id: 1,
    text: "1. Choose package",
  },
  {
    id: 2,
    text: "2. Contact details",
  },
  {
    id: 3,
    text: "3. Payment",
  },
];

const stepsDescriptions = [
  {
    id: 1,
    text: "Choose one of three packages that fits you best. You can always get extra photos after payment.",
  },
  {
    id: 2,
    text: "I will contact you to discuss details within 24 hours! You will receive a link to activate your account with albums after the payment.",
  },
  {
    id: 3,
    text: "I will contact you to discuss details within 24 hours! You will receive a link on email to activate your account with albums after the payment.",
  },
];

const Sessions = ({
  sessions,
  withSteps = false,
}: SessionsProps): JSX.Element => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const [currentStep, setCurrentStep] = React.useState<number>(1);
  const [prevStep, setPrevStep] = React.useState<number>(1);
  const [chosenSession, setChosenSession] = React.useState<SessionItem | null>(
    null
  );
  const stepsRef = React.useRef<HTMLDivElement>(null);
  const [clientEmail, setClientEmail] = React.useState<string>("");
  const { session: currentStateSession } = useTypedSelector(
    (state) => state.booking
  );
  const { user } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (withSteps) {
      if (currentStateSession) {
        if (Object.keys(user).length !== 0) {
          setCurrentStep(3);
          setChosenSession(currentStateSession);
          if (user.email) {
            setClientEmail(user.email);
          }
        } else {
          setCurrentStep(2);
          setChosenSession(currentStateSession);
        }
      }
    }
  }, [currentStateSession, withSteps, user]);

  // React.useEffect(() => {
  //   sessions.find((el) => el.id === chosenSession?.id);
  // }, [sessions, chosenSession, dispatch]);
  React.useEffect(() => {
    return () => {
      dispatch(clearCurrentStep());
    };
  }, []);

  React.useEffect(() => {
    if (prevStep < currentStep) {
      stepsRef.current?.scrollTo({
        left: stepsRef.current?.clientWidth,
        behavior: "smooth",
      });
    } else if (prevStep > currentStep) {
      stepsRef.current?.scrollTo({
        left: -stepsRef.current?.clientWidth,
        behavior: "smooth",
      });
    }
  }, [currentStep, prevStep]);

  const animDuration = 200;
  const BtnsStyle = {
    transition: `all ${animDuration}ms ease-in-out`,
    opacity: 0,
  };
  const transitionBtns: TransitionGroupProps = {
    entering: {
      opacity: 0,
      pointerEvents: "auto",
    },
    entered: {
      opacity: 1,
      pointerEvents: "auto",
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  const router = useRouter();
  const onSessionBtnClick = (session: SessionItem) => {
    if (!withSteps) {
      dispatch(getCurrentStep(session));
      // return router.push("/booking");
      return router.push("/contacts");
    }
    setChosenSession(session);
  };
  const onPrevStep = () => {
    if (currentStep === 1) {
      return setChosenSession(null);
    }
    if (Object.keys(user).length !== 0) {
      setPrevStep(currentStep);
      setCurrentStep(1);
      return;
    }
    setPrevStep(currentStep);
    setCurrentStep((state) => --state);
  };

  const onNextStep = () => {
    if (currentStep === steps.length) {
      return;
    }
    if (Object.keys(user).length !== 0) {
      setPrevStep(currentStep);
      setCurrentStep(3);
      return;
    }
    setPrevStep(currentStep);
    setCurrentStep((state) => ++state);
  };

  const onFirstStep = () => {
    setCurrentStep(1);
    setPrevStep(1);
  };

  const onSubmit: SubmitHandler<Inputs> = async ({ email }) => {
    let isExist = false;
    await axios({
      method: "GET",
      url: `${api}/api/users/exist/${email}`,
    })
      .then(({ data }) => {
        isExist = data.isExist;
      })
      .catch(() => {
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });

    if (isExist) {
      toast.error("This email already exist", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      setClientEmail(email);
      setPrevStep(currentStep);
      setCurrentStep((state) => ++state);
    }
  };

  return (
    <div id="sessions" className={styles.sessions}>
      <Container>
        {withSteps && (
          <>
            <div ref={stepsRef} className={styles.sessions__steps}>
              {steps &&
                steps.map((step) => (
                  <div
                    key={step.id}
                    className={cn(
                      styles.sessions__steps__item,
                      currentStep === step.id &&
                        styles.sessions__steps__item_active
                    )}
                  >
                    <span
                      className={cn(
                        styles.sessions__steps__item__text,
                        "body-3"
                      )}
                    >
                      {step.text}
                    </span>
                  </div>
                ))}
            </div>
            <p className={cn(styles.sessions__steps__desc, "body-3")}>
              {stepsDescriptions.find((el) => el.id === currentStep)?.text}
            </p>
          </>
        )}
        <Row className="justify-content-center">
          {currentStep === 1 && (
            <FirstStep
              chosenSession={chosenSession}
              onSessionBtnClick={onSessionBtnClick}
              sessions={sessions}
              withSteps={withSteps}
            />
          )}
          {currentStep === 2 && (
            <SecondStep
              errors={errors}
              handleSubmit={handleSubmit}
              control={control}
              onSubmitFunc={onSubmit}
            />
          )}
          {currentStep === 3 && (
            <ThirdStep
              clientEmail={clientEmail}
              chosenSession={chosenSession}
            />
          )}
        </Row>
        {currentStep === 1 && <div className={styles.sessions__line}></div>}
        <Row>
          <Col xs={12}>
            <Transition in={!!chosenSession} timeout={animDuration}>
              {(status: TransitionStatus): JSX.Element => (
                <div
                  style={{
                    ...BtnsStyle,
                    ...transitionBtns[status],
                  }}
                  className={styles.sessions__btns}
                >
                  <AnchorLink offset="200" href="#sessions">
                    <TextButton onClick={onPrevStep}>
                      {currentStep === 1 ? "Undo selection" : "Prev. step"}
                    </TextButton>
                  </AnchorLink>
                  {currentStep === 1 && (
                    <AnchorLink offset="200" href="#sessions">
                      <RegularButton onClick={onNextStep} white>
                        Next
                      </RegularButton>
                    </AnchorLink>
                  )}
                  {currentStep === 2 && (
                    <RegularButton type="submit" form="formEmail" white>
                      Next
                    </RegularButton>
                  )}
                </div>
              )}
            </Transition>
          </Col>
        </Row>
        {currentStep > 1 && (
          <div className={styles["sessions__choose-package"]}>
            <span className={styles["sessions__choose-package__title"]}>
              <span className="primary-text">
                {sessions.find((el) => el.id === chosenSession?.id)?.name}
              </span>{" "}
              package selected
            </span>
            <TextButton
              onClick={onFirstStep}
              assistance
              className={styles["sessions__choose-package__btn"]}
            >
              Change
            </TextButton>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Sessions;
