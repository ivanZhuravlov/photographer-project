import React from "react";
import { PageTitle } from "components/sections";
import {
  Image,
  RegularButton,
  TemplateDialog,
  TextButton,
  TextInput,
} from "components/UI";
import styles from "./Locations.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import cn from "classnames";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import { RightArrow, LeftArrow, TimeSelectArrow } from "components/UI/icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import TransitionGroupProps from "common/interfaces/TransitionGroupProps";
import { dayMonthYear } from "common/filters/date.filter";
import {
  LocationsProps,
  LocationItem,
  SessionItem,
  LocationSliderImg,
} from "common/interfaces/LocationsProps";
import axios from "axios";
import { Inputs } from "components/sections/Sessions/SecondStep/SecondStep.props";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import PayPalPayment from "common/paypal/PayPalPayment/PayPalPayment";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  arrows: false,
  autoplay: true,
  dots: false,
  pauseOnHover: false,
};

const Locations = ({ locations }: LocationsProps): JSX.Element => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [currentStepPopup, setCurrentStepPopup] = React.useState<number>(1);
  const [currentLocation, setCurrentLocation] = React.useState<LocationItem>();
  const [isPopupOpened, setIsPopupOpened] = React.useState<boolean>(false);
  const [selectWithSessions, setSelectWithSessions] = React.useState<
    number | null
  >(null);
  const [chosenSessionTime, setChosenSessionTime] = React.useState<
    string | null
  >(null);
  const [chosenSessionIndex, setChosenSessionIndex] = React.useState<
    number | null
  >(null);
  const [clientEmail, setClientEmail] = React.useState<string>("");
  const [animIsStart, setAnimIsStart] = React.useState<boolean>(false);
  const animDuration = 400;
  const choosenSesstionDuration = 200;
  const currentLocationStyle = {
    transition: `all ${animDuration}ms ease-in-out`,
    opacity: 0,
    height: 0,
    paddingBottom: 0,
    marginBottom: 0,
  };
  const choosenSessionStyle = {
    transition: `all ${choosenSesstionDuration}ms ease-in-out`,
    opacity: 0,
  };
  const transitionCurrentLocation: TransitionGroupProps = {
    entering: {
      opacity: 0,
      height: "auto",
      visibility: "visible",
      paddingBottom: "50px",
      marginBottom: "50px",
    },
    entered: {
      opacity: 1,
      height: "auto",
      visibility: "visible",
      paddingBottom: "50px",
      marginBottom: "50px",
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  const transitionChoosenSession: TransitionGroupProps = {
    entering: {
      opacity: 0,
      height: "auto",
    },
    entered: {
      opacity: 1,
      height: "auto",
      pointerEvents: "auto",
    },
    exiting: { opacity: 0, height: "auto" },
    exited: { opacity: 0, height: 0 },
  };
  const clearInfo = () => {
    setCurrentStepPopup(1);
    setSelectWithSessions(null);
    setChosenSessionTime(null);
    setChosenSessionIndex(null);
  };
  const getCurrentLocation = (id: number) => {
    setAnimIsStart(true);
    axios
      .request<LocationItem>({
        method: "GET",
        url: `${api}/api/locations/${id}`,
      })
      .then(({ data }) => {
        clearInfo();
        setCurrentLocation(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const openSelectWithSessions = (id: number) => {
    if (selectWithSessions === id) {
      return setSelectWithSessions(null);
    }
    setSelectWithSessions(id);
    setChosenSessionTime(null);
    setChosenSessionIndex(null);
  };
  const onClosePopup = () => {
    setIsPopupOpened(false);
  };
  React.useEffect(() => {
    setClientEmail("");
  }, [isPopupOpened]);
  const choiseSession = ({
    session,
    index,
  }: {
    session: SessionItem;
    index: number;
  }) => {
    setChosenSessionTime(`${session.start} - ${session.end}`);
    setChosenSessionIndex(index);
  };

  const customSlider = React.useRef<Slider>(null);

  const onPrevSlide = () => {
    customSlider.current?.slickPrev();
  };
  const onNextSlide = () => {
    customSlider.current?.slickNext();
  };

  const onSubmitEmail: SubmitHandler<Inputs> = async ({ email }) => {
    setClientEmail(email);
    reset({
      email: "",
    });

    setCurrentStepPopup(2);
  };

  return (
    <>
      <Fade direction="up" duration={650} triggerOnce>
        <div className={styles["locations-wrapper"]}>
          <PageTitle
            titleCol={12}
            title={
              <>
                Choose <br /> location <span>and</span> time
              </>
            }
          />
          <section id="current-location" className={styles.locations}>
            <Container>
              <Row>
                <Col xs={12}>
                  <h2
                    className={cn(
                      styles.locations__title,
                      styles.locations_text
                    )}
                  >
                    Locations for{" "}
                    <span className="primary-text">July 2021</span>
                  </h2>
                </Col>
              </Row>

              <Transition in={animIsStart} timeout={animDuration}>
                {(status: TransitionStatus): JSX.Element => (
                  <div
                    style={{
                      ...currentLocationStyle,
                      ...transitionCurrentLocation[status],
                    }}
                    className={cn(styles.locations__location)}
                  >
                    <Row>
                      <Col xs={12}>
                        <div className={styles["locations__gallery-wrapper"]}>
                          <LeftArrow
                            onClick={onPrevSlide}
                            className={styles.locations__gallery__prev}
                          />
                          {currentLocation && (
                            <Slider
                              ref={customSlider}
                              className={styles.locations__gallery}
                              {...settings}
                            >
                              {currentLocation?.location_images.map(
                                (img: LocationSliderImg, index: number) => (
                                  <Image
                                    key={index}
                                    className={styles.locations__gallery__img}
                                    src={`${api}/storage/images/locations/${img.name}`}
                                    alt="location-img"
                                  />
                                )
                              )}
                            </Slider>
                          )}
                          <RightArrow
                            onClick={onNextSlide}
                            className={styles.locations__gallery__next}
                          />
                        </div>
                      </Col>
                    </Row>
                    {currentLocation && (
                      <Row>
                        <Col md={6} lg={5} xl={4}>
                          <div className={styles.locations__time}>
                            <h4
                              className={cn(
                                styles.locations__time__title,
                                "primary-text"
                              )}
                            >
                              Available time
                            </h4>
                            <span className={styles.locations__time__subtitle}>
                              Select time for mini photoshoot
                            </span>
                            <div className={styles.locations__time__selects}>
                              {currentLocation.sessions &&
                                currentLocation.sessions.map(
                                  (select, sessionIndex: number) => (
                                    <div
                                      key={sessionIndex}
                                      className={styles.locations__time__select}
                                    >
                                      <div
                                        onClick={() =>
                                          openSelectWithSessions(
                                            sessionIndex + 1
                                          )
                                        }
                                        className={cn(
                                          styles.locations__time__select__header,
                                          selectWithSessions ===
                                            sessionIndex + 1 &&
                                            styles.locations__time__select__header_active
                                        )}
                                      >
                                        <span
                                          className={cn(
                                            styles.locations__time__select__hours,
                                            "body-4"
                                          )}
                                        >
                                          {select.time}
                                        </span>
                                        <TimeSelectArrow />
                                      </div>
                                      <div
                                        className={cn(
                                          styles.locations__time__select__body,
                                          selectWithSessions ===
                                            sessionIndex + 1 &&
                                            styles.locations__time__select__body_active
                                        )}
                                      >
                                        {select.intervals.map(
                                          (
                                            session: SessionItem,
                                            index: number
                                          ) => (
                                            <div
                                              key={index}
                                              className={cn(
                                                styles.locations__time__select__minutes,
                                                "body-4",
                                                chosenSessionIndex ===
                                                  index + 1 &&
                                                  styles.locations__time__select__minutes_chosen,
                                                currentLocation.sessions
                                                  .length ===
                                                  index + 1 &&
                                                  styles.locations__time__select__minutes_last,
                                                session.isOrdered &&
                                                  styles.locations__time__select__minutes_disable
                                              )}
                                              onClick={() =>
                                                !session.isOrdered &&
                                                choiseSession({
                                                  session,
                                                  index: index + 1,
                                                })
                                              }
                                            >
                                              {`${session.start} - ${session.end}`}
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  )
                                )}
                            </div>
                          </div>
                        </Col>
                        <Col md={6} lg={7} xl={8}>
                          <div className={styles.locations__info}>
                            <span
                              className={cn(
                                styles.locations__info__date,
                                "body-1"
                              )}
                            >
                              {dayMonthYear(currentLocation.date)}
                            </span>
                            <h2
                              className={cn(
                                styles.locations__info__title,
                                "h4"
                              )}
                            >
                              {currentLocation.name}
                            </h2>
                            <span
                              className={cn(
                                styles.locations__info__price,
                                "body-1"
                              )}
                            >
                              Price: ${currentLocation.price}
                            </span>
                            <p
                              className={cn(
                                styles.locations__info__desc,
                                "body-3"
                              )}
                            >
                              {currentLocation.description}
                            </p>
                            <a
                              href="/"
                              className={cn(
                                styles.locations__info__map,
                                "body-3"
                              )}
                              target="_blank"
                            >
                              See location on Google Maps
                            </a>
                            <Transition
                              in={!!chosenSessionTime}
                              timeout={choosenSesstionDuration}
                            >
                              {(status: TransitionStatus): JSX.Element => (
                                <div
                                  style={{
                                    ...choosenSessionStyle,
                                    ...transitionChoosenSession[status],
                                  }}
                                  className={styles.locations__info__result}
                                >
                                  <p
                                    className={cn(
                                      styles.locations__info__plan,
                                      "body-3"
                                    )}
                                  >
                                    Your planned mini photoshoot:{" "}
                                    <span>
                                      {`${currentLocation.name}, ${dayMonthYear(
                                        currentLocation.date
                                      )}, ${chosenSessionTime} `}
                                    </span>
                                  </p>
                                  <RegularButton
                                    className={styles.locations__info__btn}
                                    monochrome
                                    onClick={() => setIsPopupOpened(true)}
                                  >
                                    Book now
                                  </RegularButton>
                                </div>
                              )}
                            </Transition>
                          </div>
                        </Col>
                      </Row>
                    )}
                  </div>
                )}
              </Transition>
              <Row>
                {locations &&
                  locations.map((location: LocationItem) => (
                    <Col
                      key={location.id}
                      sm={6}
                      lg={4}
                      className={cn(
                        currentLocation?.id === location.id &&
                          styles.locations__card_none
                      )}
                    >
                      <AnchorLink offset="100" href="#current-location">
                        <div
                          onClick={() => getCurrentLocation(location.id)}
                          className={styles.locations__card}
                        >
                          <Image
                            className={styles.locations__card__img}
                            src={`${api}/storage/images/locations/${location.cover}`}
                          />
                          <h3
                            className={cn(
                              styles.locations__card__title,
                              styles.locations_text
                            )}
                          >
                            {dayMonthYear(location.date)}
                          </h3>
                          <p
                            className={cn(
                              styles.locations__card__desc,
                              styles.locations_text
                            )}
                          >
                            {location.name}
                          </p>
                          <span
                            className={cn(
                              styles.locations__card__price,
                              styles.locations_text,
                              "body-2"
                            )}
                          >
                            Price: ${location.price}
                          </span>
                        </div>
                      </AnchorLink>
                    </Col>
                  ))}
              </Row>
            </Container>
          </section>
        </div>
      </Fade>
      {currentLocation && (
        <TemplateDialog
          isOpened={isPopupOpened}
          firstBG="/popups/mini-photoshoot-1.png"
          onClose={onClosePopup}
          secondBG="/popups/mini-photoshoot-2.png"
          currentStepPopup={currentStepPopup}
        >
          <div className={styles["locations-popup"]}>
            <h3 className={cn(styles["locations-popup__title"], "body-1")}>
              mini photoshoot booking
            </h3>
            <div className={styles["locations-popup__steps"]}>
              <div
                className={cn(
                  styles["locations-popup__steps__item"],
                  currentStepPopup === 1 &&
                    styles["locations-popup__steps__item_active"]
                )}
              >
                1. Contact details
              </div>
              <div
                className={cn(
                  styles["locations-popup__steps__item"],
                  currentStepPopup === 2 &&
                    styles["locations-popup__steps__item_active"]
                )}
              >
                2. Payment
              </div>
            </div>
            <p className={cn(styles["locations-popup__desc"], "body-3")}>
              I will contact you to discuss details within 24 hours! You will
              receive a link to activate your account with albums after the
              payment.
            </p>
            <div className={cn(styles["locations-popup__info"], "body-3")}>
              <span className={styles["locations-popup__info__title"]}>
                Your planned mini photoshoot:
              </span>
              <span className={styles["locations-popup__info__res"]}>
                {" "}
                {`${currentLocation.name}, ${dayMonthYear(
                  currentLocation.date
                )}, ${chosenSessionTime}`}
              </span>
              <AnchorLink offset="100" href="#current-location">
                <TextButton
                  className={styles["locations-popup__info__btn"]}
                  primary
                  assistance
                  onClick={() => {
                    setIsPopupOpened(false);
                    setCurrentStepPopup(1);
                  }}
                >
                  Change
                </TextButton>
              </AnchorLink>
            </div>
            {currentStepPopup === 1 ? (
              <form
                onSubmit={handleSubmit(onSubmitEmail)}
                className={styles["locations-popup__form"]}
              >
                <Controller
                  render={(props) => (
                    <TextInput
                      className={styles["locations-popup__form__input"]}
                      label="Enter your email"
                      value={props.field.value}
                      onChange={props.field.onChange}
                      errors={errors.email}
                    />
                  )}
                  name="email"
                  control={control}
                  rules={{
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line
                  }}
                  defaultValue=""
                />
                <TextButton
                  type="button"
                  className={styles["locations-popup__form__help-btn"]}
                  assistance
                >
                  I already have an account
                </TextButton>
                <RegularButton
                  type="submit"
                  className={styles["locations-popup__form__btn"]}
                  white
                  monochrome
                >
                  Next
                </RegularButton>
              </form>
            ) : (
              <div className={styles["locations-popup__form__paypal"]}>
                <PayPalPayment
                  clientEmail={clientEmail}
                  chosenMiniphotoshoot={currentLocation}
                />
              </div>
            )}
          </div>
        </TemplateDialog>
      )}
    </>
  );
};

export default Locations;
