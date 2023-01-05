import React from "react";
import styles from "./Footer.module.scss";
import { FooterProps } from "./Footer.props";
import { Container } from "react-bootstrap";
import {
  LinkButton,
  RegularButton,
  TemplateDialog,
  TextButton,
  TextInput,
} from "components/UI";
import Link from "next/link";
import cn from "classnames";
import { LGBT, BlackLivesMatter } from "components/UI/icons";
import { Support } from "components/sections";
import { format } from "date-fns";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useTypedSelector } from "hooks/useTypedSelector";
import { login } from "store/actions/user";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";

export type Inputs = {
  email: string;
  password: string;
};

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const Footer = ({ withSupport }: FooterProps): JSX.Element => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>(); // need to make two different forms for working without reset func to email input
  const [isPopupOpened, setIsPopupOpened] = React.useState<boolean>(false);
  const [isHelpPopupOpened, setIsHelpPopupOpened] =
    React.useState<boolean>(false);
  const [isSendPopupOpened, setIsSendPopupOpened] =
    React.useState<boolean>(false);
  const [currentStepPopup, setCurrentStepPopup] = React.useState<number>(1);
  const [clientEmail, setClientEmail] = React.useState<string>("");
  const dispatch = useDispatch();
  const { isAuth } = useTypedSelector((state) => state.user);
  const onClosePopup = () => {
    document.body.classList.remove("no-scroll");
    setIsPopupOpened(false);
  };
  const onOpenPopup = () => {
    router.push("/contacts");
    // document.body.classList.add("no-scroll");
    // setIsPopupOpened(true);
    // setCurrentStepPopup(1);
  };
  const onOpenHelpPopup = () => {
    setIsHelpPopupOpened(true);
  };
  const onCloseHelpPopup = () => {
    setIsHelpPopupOpened(false);
  };
  const onOpenSendPopup = () => {
    setIsSendPopupOpened(true);
  };
  const onCloseSendPopup = () => {
    setIsSendPopupOpened(false);
  };
  const onPrevStep = () => {
    setCurrentStepPopup(1);
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
  return (
    <>
      <Fade>
        <>
          {withSupport && <Support />}
          <footer className={styles.footer}>
            <Container className={styles.footer__container}>
              <nav className={styles.footer__nav}>
                <ul className={styles.footer__list}>
                  <li className={styles.footer__list__item}>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li className={styles.footer__list__item}>
                    <Link href="/portraits">
                      <a>portraits</a>
                    </Link>
                  </li>
                  <li className={styles.footer__list__item}>
                    <Link href="/spaces">
                      <a>spaces</a>
                    </Link>
                  </li>
                  <li
                    className={cn(
                      styles.footer__list__item,
                      styles.footer__list__item_right
                    )}
                  >
                    <Link href="/pre-wedding">
                      <a>pre-wedding</a>
                    </Link>
                  </li>
                  <li
                    className={cn(
                      styles.footer__list__item,
                      styles.footer__list__item_right
                    )}
                  >
                    <Link href="/pricing">
                      <a>Pricing</a>
                    </Link>
                  </li>
                  {/* <li
                className={cn(
                  styles.footer__list__item,
                  styles.footer__list__item_right
                )}
              >
                <Link href="/mini-photoshoot">
                  <a>mini photoshoot</a>
                </Link>
              </li> */}
                  <li
                    className={cn(
                      styles.footer__list__item,
                      styles.footer__list__item_right
                    )}
                  >
                    <Link href="/contacts">
                      <a>Contacts</a>
                    </Link>
                  </li>
                  {!isAuth && (
                    // <li className={cn(styles.footer__list__item)}>
                    //   <LinkButton onClick={onOpenPopup} fontSize={20}>
                    //     log in
                    //   </LinkButton>
                    // </li>
                    <li
                      className={cn(
                        styles.footer__list__item,
                        styles.footer__list__item_right
                      )}
                    >
                      <LinkButton onClick={onOpenPopup} fontSize={20}>
                        log in
                      </LinkButton>
                    </li>
                  )}
                </ul>
              </nav>
              <div className={styles.footer__info}>
                <span className={cn(styles.footer__info__copy, "body-3")}>
                  © artem’s.art {format(new Date(), "yyyy")}
                </span>
                <div className={styles.footer__info__icons}>
                  <LGBT />
                  <BlackLivesMatter />
                </div>
                <ul className={styles.footer__info__list}>
                  <li className={styles.footer__info__list__item}>
                    <Link href="/terms-of-services">
                      <a className="body-3">terms of use</a>
                    </Link>
                  </li>
                  <li className={styles.footer__info__list__item}>
                    <Link href="/privacy-policy">
                      <a className="body-3">privacy policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Container>
          </footer>
        </>
      </Fade>
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

export default Footer;
