import React from "react";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.props";
import { Container } from "react-bootstrap";
import { ArrowDown, Avatar, Logo } from "components/UI/icons";
import {
  LinkButton,
  TemplateDialog,
  RegularButton,
  TextButton,
  TextInput,
} from "components/UI";
import Link from "next/link";
import cn from "classnames";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import TransitionGroupProps from "common/interfaces/TransitionGroupProps";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useTypedSelector } from "hooks/useTypedSelector";
import { login, logout } from "store/actions/user";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

export type Inputs = {
  email: string;
  password: string;
};

const Header = ({ type = "default" }: HeaderProps): JSX.Element => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>(); // need to make two different forms for working without reset func to email input
  const router = useRouter();
  const [isDropDownOpen, setIsDropDownOpen] = React.useState<boolean>(false);
  const [currentStepPopup, setCurrentStepPopup] = React.useState<number>(1);
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [isButtonShow, setIsButtonShow] = React.useState<boolean>(false);
  const [isPopupOpened, setIsPopupOpened] = React.useState<boolean>(false);
  const [isSendPopupOpened, setIsSendPopupOpened] =
    React.useState<boolean>(false);
  const [clientEmail, setClientEmail] = React.useState<string>("");
  const [isHelpPopupOpened, setIsHelpPopupOpened] = React.useState(false);
  const [isAuthSelectVisible, setIsAuthSelectVisible] =
    React.useState<boolean>(false);
  const dispatch = useDispatch();
  const { user, isAuth } = useTypedSelector((state) => state.user);

  // Animation section started
  const animDuration = 200;
  const switchDuration = 600;

  const dropDownStyle = {
    transition: `opacity ${animDuration}ms ease-in-out`,
    opacity: 0,
    transform: "translate(-50%, -200%)",
  };
  const menuStyle = {
    transition: `transform ${animDuration}ms ease-in-out`,
    transform: "translateX(0)",
  };

  const opacityStyle = {
    transition: `all ${animDuration}ms ease-in-out`,
    opacity: 0,
  };
  const btnSwitchStyle = {
    transition: `all ${animDuration}ms ease-in-out`,
    transform: "translateY(-150px)",
  };

  const transitionOpacity: TransitionGroupProps = {
    entering: { opacity: 0 },
    entered: { opacity: 1, pointerEvents: "auto" },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const transitionDropDown: TransitionGroupProps = {
    entering: { transform: "translate(-50%, 0)" },
    entered: { opacity: 1, transform: "translate(-50%, 0)" },
    exiting: { opacity: 0, transform: "translate(-50%, 0)" },
    exited: { opacity: 0, transform: "translate(-50%, -200%)" },
  };
  const transitionMenu: TransitionGroupProps = {
    exited: { transform: "translateX(100vw)" },
  };

  const transtionSwitchBtn: TransitionGroupProps = {
    entering: {
      transform: "translate(0, -50%)",
    },
    entered: {
      transform: "translate(0, -50%)",
    },
    exiting: { opacity: 0, pointerEvents: "none" },
    exited: { opacity: 0, pointerEvents: "none" },
  };
  const transtionLoginBtn: TransitionGroupProps = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: {
      opacity: 0,
      transform: "translate(0, -50%)",
      pointerEvents: "none",
    },
    exited: {
      opacity: 0,
      transform: "translate(0, -50%)",
      pointerEvents: "none",
    },
  };
  // Animation section ended

  const handleScroll = () => {
    // toggle log in and book a session btns
    if (window.scrollY >= 100) {
      setIsButtonShow(true);
    } else {
      setIsButtonShow(false);
    }
  };

  const onPrevStep = () => {
    setCurrentStepPopup(1);
  };
  const onOpenHelpPopup = () => {
    setIsHelpPopupOpened(true);
  };
  const onCloseHelpPopup = () => {
    setIsHelpPopupOpened(false);
  };
  const onOpenSendPopup = () => {
    setIsSendPopupOpened(true);
    axios({
      method: "POST",
      url: `${api}/api/mail/login`,
      data: {
        email: clientEmail,
      },
    });
  };
  const onCloseSendPopup = () => {
    setIsSendPopupOpened(false);
  };

  const onSubmitEmail: SubmitHandler<Inputs> = async ({ email }) => {
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

    if (!isExist) {
      toast.error("This email not exist", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      setClientEmail(email); // reset func to email input for upper comment about forms
      reset({
        email: "",
      });
      setCurrentStepPopup(2);
    }
  };
  const onSubmitPassword: SubmitHandler<Inputs> = async ({ password }) => {
    const res = await dispatch(login(clientEmail, password));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (res) {
      onClosePopup();
      toggleMenu();
      reset({
        password: "",
      });
    } else {
      toast.error("Wrong password", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const onLogOut = async () => {
    await dispatch(logout());
    setIsAuthSelectVisible(false);
    router.push("/");
  };

  const toggleAccountInfo = () => {
    // dropdown with links for auth user
    setIsAuthSelectVisible((state) => !state);
    setIsMenuOpen(false);
  };

  const toBooking = () => {
    router.push("/contacts");
  };

  const onClosePopup = () => {
    document.body.classList.remove("no-scroll");
    setIsPopupOpened(false);
    setIsHelpPopupOpened(false);
    setIsSendPopupOpened(false);
  };
  const onOpenPopup = () => {
    router.push("/contacts");
    // document.body.classList.add("no-scroll");
    // setIsPopupOpened(true);
    // setCurrentStepPopup(1);
  };
  const toggleMenu = () => {
    document.body.classList.contains("no-scroll");
    setIsMenuOpen((state) => !state);
    setIsAuthSelectVisible(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Transition in={isAuthSelectVisible} timeout={animDuration}>
        {(status: TransitionStatus): JSX.Element => (
          <div
            onClick={() => setIsAuthSelectVisible(false)}
            style={{
              ...opacityStyle,
              ...transitionOpacity[status],
            }}
            className={styles.header__overlay}
          ></div>
        )}
      </Transition>
      {type == "default" && (
        <header className={styles["header-wrapper"]}>
          <Fade delay={200} top>
            <div
              className={cn(
                styles.header,
                isMenuOpen && styles.header_active,
                isAuthSelectVisible && styles.header_hover
              )}
            >
              <Container className={styles.header__container}>
                <Fade top delay={700} duration={180}>
                  <Link href="/">
                    <a className={styles.header__logo}>
                      <Logo />
                    </a>
                  </Link>
                </Fade>
                <nav className="header__nav">
                  <ul className={styles.header__menu}>
                    <li className={styles.header__menu__item}>
                      <Fade top delay={730} duration={180}>
                        <Link href="/about">
                          <a
                            className={cn(
                              router.asPath.includes("/about") &&
                                styles.header__menu__item_active
                            )}
                          >
                            about
                          </a>
                        </Link>
                      </Fade>
                    </li>
                    <li
                      className={cn(
                        styles.header__menu__item,
                        styles["header__menu__dropdown-title"]
                      )}
                      onMouseLeave={() => setIsDropDownOpen(false)}
                    >
                      <span
                        className={styles["header__menu__dropdown-title__text"]}
                        onMouseEnter={() => setIsDropDownOpen(true)}
                      >
                        <Fade top delay={760} duration={180}>
                          portfolio
                        </Fade>
                      </span>
                      <Transition in={isDropDownOpen} timeout={animDuration}>
                        {(status: TransitionStatus): JSX.Element => (
                          <div
                            style={{
                              ...dropDownStyle,
                              ...transitionDropDown[status],
                            }}
                            className={styles.header__menu__dropdown}
                          >
                            <Link href="/portraits">
                              <a
                                className={cn(
                                  styles.header__menu__dropdown__item,
                                  router.asPath.includes("/portraits") &&
                                    styles.header__menu__item_active
                                )}
                              >
                                portraits
                              </a>
                            </Link>
                            <Link href="/spaces">
                              <a
                                className={cn(
                                  styles.header__menu__dropdown__item,
                                  router.asPath.includes("/spaces") &&
                                    styles.header__menu__item_active
                                )}
                              >
                                spaces
                              </a>
                            </Link>
                            <Link href="/pre-wedding">
                              <a
                                className={cn(
                                  styles.header__menu__dropdown__item,
                                  router.asPath.includes("/pre-wedding") &&
                                    styles.header__menu__item_active
                                )}
                              >
                                pre-wedding
                              </a>
                            </Link>
                          </div>
                        )}
                      </Transition>
                    </li>
                    <li className={styles.header__menu__item}>
                      <Fade top delay={790} duration={180}>
                        <Link href="/pricing">
                          <a
                            className={cn(
                              router.asPath.includes("/pricing") &&
                                styles.header__menu__item_active
                            )}
                          >
                            Pricing
                          </a>
                        </Link>
                      </Fade>
                    </li>
                    {/* <li className={styles.header__menu__item}>
                      <Fade top delay={820} duration={180}>
                        <Link href="/mini-photoshoot">
                          <a
                            className={cn(
                              router.asPath.includes("/mini-photoshoot") &&
                                styles.header__menu__item_active
                            )}
                          >
                            mini photoshoot
                          </a>
                        </Link>
                      </Fade>
                    </li> */}
                    <li className={styles.header__menu__item}>
                      <Fade top delay={820} duration={180}>
                        <Link href="/contacts">
                          <a
                            className={cn(
                              router.asPath.includes("/contacts") &&
                                styles.header__menu__item_active
                            )}
                          >
                            Contacts
                          </a>
                        </Link>
                      </Fade>
                    </li>
                  </ul>
                </nav>
                {isAuth ? (
                  <div className={styles.header__auth}>
                    <Fade distance="35px" top delay={700} duration={250}>
                      <div
                        onClick={toggleAccountInfo}
                        className={styles.header__auth__info}
                      >
                        <span
                          className={cn(
                            styles.header__auth__username,
                            "body-3"
                          )}
                        >
                          {user?.username}
                        </span>
                        {user.image && user.image !== "default_image.png" ? (
                          <img
                            src={`${api}/storage/images/users/avatars/${user.image}`}
                            alt="Avatar"
                            className={styles.header__auth__avatar}
                          />
                        ) : (
                          <Avatar className={styles.header__auth__avatar} />
                        )}
                        <ArrowDown
                          className={cn(
                            styles.header__auth__arrow,
                            isAuthSelectVisible &&
                              styles.header__auth__arrow_active
                          )}
                        />
                      </div>
                    </Fade>
                    <Transition in={isAuthSelectVisible} timeout={animDuration}>
                      {(status: TransitionStatus): JSX.Element => (
                        <div
                          style={{
                            ...opacityStyle,
                            ...transitionOpacity[status],
                          }}
                          className={styles.header__auth__select}
                        >
                          {/* <div className={styles.header__auth__select__row}>
                            <Link href="/account/albums">
                              <a
                                className={cn(
                                  styles.header__auth__select__link,
                                  '"body-3"'
                                )}
                              >
                                personal cabinet
                              </a>
                            </Link>
                          </div> */}
                          <div className={styles.header__auth__select__row}>
                            <Link href="/account/settings/personal">
                              <a
                                className={cn(
                                  styles.header__auth__select__link,
                                  '"body-3"'
                                )}
                              >
                                account settings
                              </a>
                            </Link>
                          </div>
                          <div className={styles.header__auth__select__row}>
                            <button
                              onClick={onLogOut}
                              className={cn(
                                styles["header__auth__select__log-out"],
                                "body-3"
                              )}
                            >
                              log out
                            </button>
                          </div>
                        </div>
                      )}
                    </Transition>
                  </div>
                ) : (
                  <>
                    <Transition in={isButtonShow} timeout={switchDuration}>
                      {(status: TransitionStatus): JSX.Element => (
                        <RegularButton
                          style={{
                            ...btnSwitchStyle,
                            ...transtionSwitchBtn[status],
                          }}
                          white
                          opacity
                          className={styles.header__btn}
                          onClick={toBooking}
                        >
                          Book a session
                        </RegularButton>
                      )}
                    </Transition>
                    <Transition in={!isButtonShow} timeout={animDuration}>
                      {(status: TransitionStatus): JSX.Element => (
                        <Fade top delay={850} duration={180}>
                          <LinkButton
                            style={{
                              ...opacityStyle,
                              ...transtionLoginBtn[status],
                            }}
                            fontSize={22}
                            className={styles.header__login}
                            onClick={onOpenPopup}
                          >
                            log in
                          </LinkButton>
                        </Fade>
                      )}
                    </Transition>
                  </>
                )}
                <Fade distance="35px" top delay={700} duration={250}>
                  <button
                    onClick={toggleMenu}
                    className={cn(
                      styles.header__burger,
                      isMenuOpen && styles.header__burger_active
                    )}
                  ></button>
                </Fade>
              </Container>
            </div>
          </Fade>
          <Transition in={isMenuOpen} timeout={animDuration}>
            {(status: TransitionStatus): JSX.Element => (
              <header
                style={{
                  ...menuStyle,
                  ...transitionMenu[status],
                }}
                className={styles["header-m"]}
              >
                <Container>
                  <ul className={styles["header-m__menu"]}>
                    <Link href="/about">
                      <a
                        className={cn(
                          router.asPath.includes("/about") &&
                            styles["header-m__menu__item_active"],
                          styles["header-m__menu__item"]
                        )}
                      >
                        about
                      </a>
                    </Link>
                    <Link href="/portraits">
                      <a
                        className={cn(
                          router.asPath.includes("/portraits") &&
                            styles["header-m__menu__item_active"],
                          styles["header-m__menu__item"]
                        )}
                      >
                        portraits
                      </a>
                    </Link>
                    <Link href="/spaces">
                      <a
                        className={cn(
                          router.asPath.includes("/spaces") &&
                            styles["header-m__menu__item_active"],
                          styles["header-m__menu__item"]
                        )}
                      >
                        spaces
                      </a>
                    </Link>
                    <Link href="/pre-wedding">
                      <a
                        className={cn(
                          router.asPath.includes("/pre-wedding") &&
                            styles["header-m__menu__item_active"],
                          styles["header-m__menu__item"]
                        )}
                      >
                        pre-wedding
                      </a>
                    </Link>
                    <Link href="/pricing">
                      <a
                        className={cn(
                          router.asPath.includes("/pricing") &&
                            styles["header-m__menu__item_active"],
                          styles["header-m__menu__item"]
                        )}
                      >
                        Pricing
                      </a>
                    </Link>
                    {/* <Link href="/mini-photoshoot">
                      <a
                        className={cn(
                          router.asPath.includes("/mini-photoshoot") &&
                            styles["header-m__menu__item_active"],
                          styles["header-m__menu__item"]
                        )}
                      >
                        mini photoshoot
                      </a>
                    </Link> */}
                    <Link href="/contacts">
                      <a
                        className={cn(
                          router.asPath.includes("/contacts") &&
                            styles["header-m__menu__item_active"],
                          styles["header-m__menu__item"]
                        )}
                      >
                        Contacts
                      </a>
                    </Link>
                    {!isAuth && (
                      <LinkButton
                        onClick={onOpenPopup}
                        fontSize={38}
                        lineHeight={48}
                      >
                        log in
                      </LinkButton>
                    )}
                  </ul>
                  <div className={styles["header-m__footer"]}>
                    <RegularButton
                      black
                      className={styles["header-m__footer__btn"]}
                      onClick={toBooking}
                    >
                      Book a session
                    </RegularButton>
                    <span className={styles["header-m__footer__tel"]}>
                      503-593-3732
                    </span>
                    <span className={styles["header-m__footer__email"]}>
                      photography@artems.art
                    </span>
                  </div>
                </Container>
              </header>
            )}
          </Transition>
        </header>
      )}
      {type === "with-auth" && (
        <header>
          <Fade delay={200} top>
            <div
              className={cn(
                styles.header,
                styles.header_fill,
                isMenuOpen && styles.header_active
              )}
            >
              <Container className={styles.header__container}>
                <Fade top delay={700} duration={180}>
                  <Link href="/">
                    <a className={styles.header__logo}>
                      <Logo />
                    </a>
                  </Link>
                </Fade>
                <nav className="header__nav">
                  <ul className={styles.header__menu}>
                    {/* <li
                      className={cn(
                        styles.header__menu__item,
                        styles.header__menu__item_auth
                      )}
                    >
                      <Fade top delay={730} duration={180}>
                        <Link href="/account/albums">
                          <a
                            className={cn(
                              router.asPath.includes("/account/albums") &&
                                styles.header__menu__item_active
                            )}
                          >
                            ALBUMS
                          </a>
                        </Link>
                      </Fade>
                    </li>
                    <li
                      className={cn(
                        styles.header__menu__item,
                        styles.header__menu__item_auth
                      )}
                    >
                      <Fade top delay={730} duration={180}>
                        <Link href="/account/downloads">
                          <a
                            className={cn(
                              router.asPath.includes("/account/downloads") &&
                                styles.header__menu__item_active
                            )}
                          >
                            READY TO DOWNLOAD
                          </a>
                        </Link>
                      </Fade>
                    </li> */}
                  </ul>
                </nav>
                <div className={styles.header__auth}>
                  <Fade distance="35px" top delay={700} duration={250}>
                    <div
                      onClick={toggleAccountInfo}
                      className={styles.header__auth__info}
                    >
                      <span
                        className={cn(styles.header__auth__username, "body-3")}
                      >
                        {user?.username}
                      </span>
                      {user.image && user.image !== "default_image.png" ? (
                        <img
                          src={`${api}/storage/images/users/avatars/${user.image}`}
                          alt="Avatar"
                          className={styles.header__auth__avatar}
                        />
                      ) : (
                        <Avatar className={styles.header__auth__avatar} />
                      )}
                      <ArrowDown
                        className={cn(
                          styles.header__auth__arrow,
                          isAuthSelectVisible &&
                            styles.header__auth__arrow_active
                        )}
                      />
                    </div>
                  </Fade>
                  <Transition in={isAuthSelectVisible} timeout={animDuration}>
                    {(status: TransitionStatus): JSX.Element => (
                      <div
                        style={{
                          ...opacityStyle,
                          ...transitionOpacity[status],
                        }}
                        className={styles.header__auth__select}
                      >
                        {/* <div className={styles.header__auth__select__row}>
                          <Link href="/account/albums">
                            <a
                              className={cn(
                                styles.header__auth__select__link,
                                '"body-3"'
                              )}
                            >
                              personal cabinet
                            </a>
                          </Link>
                        </div> */}
                        <div className={styles.header__auth__select__row}>
                          <Link href="/account/settings/personal">
                            <a
                              className={cn(
                                styles.header__auth__select__link,
                                '"body-3"'
                              )}
                            >
                              account settings
                            </a>
                          </Link>
                        </div>
                        <div className={styles.header__auth__select__row}>
                          <button
                            onClick={onLogOut}
                            className={cn(
                              styles["header__auth__select__log-out"],
                              "body-3"
                            )}
                          >
                            log out
                          </button>
                        </div>
                      </div>
                    )}
                  </Transition>
                </div>
                <Fade distance="35px" top delay={1000} duration={250}>
                  <button
                    onClick={() => toggleMenu()}
                    className={cn(
                      styles.header__burger,
                      isMenuOpen && styles.header__burger_active
                    )}
                  ></button>
                </Fade>
              </Container>
            </div>
          </Fade>
          <Transition in={isMenuOpen} timeout={animDuration}>
            {(status: TransitionStatus): JSX.Element => (
              <header
                style={{
                  ...menuStyle,
                  ...transitionMenu[status],
                }}
                className={styles["header-m"]}
              >
                <Container>
                  <ul
                    className={cn(
                      styles["header-m__menu"],
                      styles["header-m__menu_auth"]
                    )}
                  >
                    {/* <Link href="/account/albums">
                      <a
                        className={cn(
                          router.asPath.includes("/account/albums") &&
                            styles["header-m__menu__item_active"],
                          styles["header-m__menu__item"],
                          styles["header-m__menu__item_auth"]
                        )}
                      >
                        ALBUMS
                      </a>
                    </Link>
                    <Link href="/account/downloads">
                      <a
                        className={cn(
                          router.asPath.includes("/account/downloads") &&
                            styles["header-m__menu__item_active"],
                          styles["header-m__menu__item"],
                          styles["header-m__menu__item_auth"]
                        )}
                      >
                        READY TO DOWNLOAD
                      </a>
                    </Link> */}
                  </ul>
                  <div className={styles["header-m__account"]}>
                    <div className={styles["header-m__account__info"]}>
                      {user.image && user.image !== "default_image.png" ? (
                        <img
                          src={`${api}/storage/images/users/avatars/${user.image}`}
                          alt="Avatar"
                          className={styles["header-m__account__info__avatar"]}
                        />
                      ) : (
                        <Avatar
                          className={styles["header-m__account__info__avatar"]}
                        />
                      )}
                      <span
                        className={styles["header-m__account__info__nickname"]}
                      >
                        {user?.username}
                      </span>
                    </div>
                    {/* <Link href="/account/cabinet">
                      <a
                        className={cn(
                          router.asPath.includes("/account/cabinet") &&
                            styles["header-m__menu__item_active"],
                          styles["header-m__account__link"]
                        )}
                      >
                        personal cabinet
                      </a>
                    </Link> */}
                    <Link href="/account/settings/personal">
                      <a
                        className={cn(
                          router.asPath.includes("/account/settings") &&
                            styles["header-m__menu__item_active"],
                          styles["header-m__account__link"]
                        )}
                      >
                        account settings
                      </a>
                    </Link>
                    <Link href="/">
                      <a
                        className={cn(
                          cn(
                            styles["header-m__account__link"],
                            styles["header-m__account__link_logout"]
                          )
                        )}
                        onClick={onLogOut}
                      >
                        log out
                      </a>
                    </Link>
                  </div>
                  <div className={styles["header-m__footer"]}>
                    <RegularButton
                      black
                      className={styles["header-m__footer__btn"]}
                      onClick={toBooking}
                    >
                      Book a session
                    </RegularButton>
                    <span className={styles["header-m__footer__tel"]}>
                      503-593-3732
                    </span>
                    <span className={styles["header-m__footer__email"]}>
                      photography@artems.art
                    </span>
                  </div>
                </Container>
              </header>
            )}
          </Transition>
        </header>
      )}
      {type === "without-auth" && (
        <header>
          <Fade delay={200} top>
            <div
              className={cn(styles.header, isMenuOpen && styles.header_active)}
            >
              <Container className={styles.header__container}>
                <Fade top delay={700} duration={180}>
                  <Link href="/">
                    <a className={styles.header__logo}>
                      <Logo />
                    </a>
                  </Link>
                </Fade>
                <nav className="header__nav">
                  <ul className={styles.header__menu}>
                    {/* <li
                      className={cn(
                        styles.header__menu__item,
                        styles.header__menu__item_auth,
                        styles["header__menu__item_not-auth"]
                      )}
                    >
                      <Fade top delay={730} duration={180}>
                        <span>ALBUMS</span>
                      </Fade>
                    </li>
                    <li
                      className={cn(
                        styles.header__menu__item,
                        styles.header__menu__item_auth,
                        styles["header__menu__item_not-auth"]
                      )}
                    >
                      <Fade top delay={730} duration={180}>
                        <span>READY TO DOWNLOAD</span>
                      </Fade>
                    </li> */}
                  </ul>
                </nav>
                <Fade distance="35px" top delay={1000} duration={250}>
                  <button
                    onClick={() => toggleMenu()}
                    className={cn(
                      styles.header__burger,
                      isMenuOpen && styles.header__burger_active
                    )}
                  ></button>
                </Fade>
              </Container>
            </div>
          </Fade>
          <Transition in={isMenuOpen} timeout={animDuration}>
            {(status: TransitionStatus): JSX.Element => (
              <header
                style={{
                  ...menuStyle,
                  ...transitionMenu[status],
                }}
                className={styles["header-m"]}
              >
                <Container>
                  <ul
                    className={cn(
                      styles["header-m__menu"],
                      styles["header-m__menu_auth"]
                    )}
                  >
                    {/* <Link href="/account/albums">
                      <a
                        className={cn(
                          router.asPath.includes("/account/albums") &&
                            styles["header-m__menu__item_active"],
                          styles["header-m__menu__item"],
                          styles["header-m__menu__item_auth"],
                          styles["header-m__menu__item_not-auth"]
                        )}
                      >
                        ALBUMS
                      </a>
                    </Link>
                    <Link href="/account/downloads">
                      <a
                        className={cn(
                          router.asPath.includes("/account/downloads") &&
                            styles["header-m__menu__item_active"],
                          styles["header-m__menu__item"],
                          styles["header-m__menu__item_auth"],
                          styles["header-m__menu__item_not-auth"]
                        )}
                      >
                        READY TO DOWNLOAD
                      </a>
                    </Link> */}
                  </ul>
                  <div className={styles["header-m__footer"]}>
                    <RegularButton
                      black
                      className={styles["header-m__footer__btn"]}
                      onClick={toBooking}
                    >
                      Book a session
                    </RegularButton>
                    <span className={styles["header-m__footer__tel"]}>
                      503-593-3732
                    </span>
                    <span className={styles["header-m__footer__email"]}>
                      photography@artems.art
                    </span>
                  </div>
                </Container>
              </header>
            )}
          </Transition>
        </header>
      )}

      <TemplateDialog
        isOpened={isPopupOpened}
        firstBG="/popups/login-1.png"
        onClose={onClosePopup}
        secondBG="/popups/login-2.png"
        currentStepPopup={currentStepPopup}
      >
        <div className="login-popup">
          <h3 className={cn("login-popup__title", "body-1")}>
            Log in into your account
          </h3>
          <p className={cn("login-popup__desc", "body-3")}>
            {currentStepPopup === 1
              ? "Enter your email to log in into your personal account"
              : "Enter your password to log in into your personal account"}
          </p>
          {currentStepPopup === 1 ? (
            <form
              onSubmit={handleSubmit(onSubmitEmail)}
              className="login-popup__form"
            >
              <Controller
                render={(props) => (
                  <TextInput
                    className="login-popup__form__input"
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
                className="login-popup__form__help-btn"
                assistance
                onClick={onOpenHelpPopup}
              >
                I don’t have an account
              </TextButton>
              <div className="login-popup__form__btns">
                <RegularButton
                  type="submit"
                  className="login-popup__form__btn"
                  white
                  monochrome
                >
                  Next
                </RegularButton>
              </div>
            </form>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmitPassword)}
              className="login-popup__form"
            >
              <Controller
                render={(props) => (
                  <TextInput
                    className="login-popup__form__input"
                    label="Enter your password"
                    type="password"
                    value={props.field.value}
                    onChange={props.field.onChange}
                    errors={errors.password}
                  />
                )}
                name="password"
                control={control}
                rules={{
                  required: true,
                  minLength: 6,
                }}
                defaultValue=""
              />
              <TextButton
                type="button"
                className="login-popup__form__help-btn"
                assistance
                onClick={onOpenSendPopup}
              >
                Send me a link to login without password
              </TextButton>
              <div className="login-popup__form__btns">
                <TextButton type="button" onClick={onPrevStep}>
                  Prev. step
                </TextButton>
                <RegularButton
                  type="submit"
                  className="login-popup__form__btn"
                  white
                  monochrome
                >
                  Next
                </RegularButton>
              </div>
            </form>
          )}
        </div>
      </TemplateDialog>
      <TemplateDialog
        isOpened={isHelpPopupOpened}
        firstBG="/popups/login-1.png"
        onClose={onCloseHelpPopup}
        secondBG="/popups/login-2.png"
      >
        <div className="login-popup">
          <h3 className={cn("login-popup__title", "body-1")}>
            You do not have an account?
          </h3>
          <p
            className={cn(
              "login-popup__desc",
              "login-popup__desc_large",
              "body-3"
            )}
          >
            To create a personal account, you first need to book a photo
            session. After, you will have access to all your albums.
          </p>
          <TextButton
            type="button"
            className="login-popup__form__help-btn"
            assistance
            onClick={onCloseHelpPopup}
          >
            I already have an account
          </TextButton>
          <div className="login-popup__form__btns">
            <RegularButton
              className="login-popup__form__btn"
              white
              monochrome
              href="/contacts"
            >
              Book a session
            </RegularButton>
          </div>
        </div>
      </TemplateDialog>
      <TemplateDialog
        isOpened={isSendPopupOpened}
        firstBG="/popups/login-1.png"
        onClose={onCloseSendPopup}
        secondBG="/popups/login-2.png"
      >
        <div className="login-popup">
          <h3 className={cn("login-popup__title", "body-1")}>
            link sent to your email
          </h3>
          <p className={cn("login-popup__desc", "body-3")}>
            Check your mailbox for letter with a link to log in.
          </p>
        </div>
      </TemplateDialog>
    </>
  );
};

export default Header;
