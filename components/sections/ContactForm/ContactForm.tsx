import React from "react";
import styles from "./ContactForm.module.scss";
import cn from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import {
  TextInput,
  TextArea,
  CheckBoxInput,
  RegularButton,
} from "components/UI";
import { PageTitle } from "components/sections";
import { Facebook, Instagram } from "components/UI/icons";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import Fade from "react-reveal/Fade";
import Link from "next/link";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

type Inputs = {
  name: string;
  email: string;
  message: string;
  accept: boolean;
};

const ContactForm = (): JSX.Element => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const [isSended, setIsSended] = React.useState<boolean>(false);

  // const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("sended");
  // };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await axios({
      method: "POST",
      url: `${api}/api/mail/contact`,
      data,
    })
      .then(() => {
        setIsSended(true);
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
  };

  return (
    <Fade delay={500}>
      <div className={styles["contact-wrapper"]}>
        <PageTitle
          title={
            <>
              get <br /> <span>in</span> touch
            </>
          }
          desc="Fill out my contact form below. I'll get back to you with more details on how we are going to plan your perfect elopement. Have questions? Feel free to ask me any question you have!"
        />
        <section className={styles.contact}>
          <Container>
            <Row>
              <Col xs={{ order: 2, span: 12 }} md={{ span: 5, order: 1 }}>
                <div className={styles.contact__info}>
                  <div className={styles["contact__info-block"]}>
                    <span
                      className={cn(
                        styles["contact__info-block__title"],
                        "body-3"
                      )}
                    >
                      Located in
                    </span>
                    <span
                      className={cn(
                        styles["contact__info-block__desc"],
                        "body-2"
                      )}
                    >
                      Portland, Oregon
                    </span>
                  </div>
                  <div className={styles["contact__info-block"]}>
                    <span
                      className={cn(
                        styles["contact__info-block__title"],
                        "body-3"
                      )}
                    >
                      Contact me
                    </span>
                    <a
                      className={cn(
                        styles["contact__info-block__desc"],
                        "body-2"
                      )}
                      href="tel:+5035933732"
                    >
                      503-593-3732
                    </a>
                  </div>
                  <div className={styles["contact__info-block"]}>
                    <span
                      className={cn(
                        styles["contact__info-block__title"],
                        "body-3"
                      )}
                    >
                      Email me
                    </span>
                    <a
                      className={cn(
                        styles["contact__info-block__desc"],
                        "body-2"
                      )}
                      href="mailto:photography@artems.art"
                    >
                      photography@artems.art
                    </a>
                  </div>
                  <div className={styles["contact__info-block"]}>
                    <span
                      className={cn(
                        styles["contact__info-block__title"],
                        "body-3"
                      )}
                    >
                      Follow me
                    </span>
                    <span
                      className={cn(
                        styles["contact__info-block__social"],
                        "body-2"
                      )}
                    >
                      <a
                        className={styles["contact__info-block__social__item"]}
                        target="_blank"
                        href="https://www.instagram.com/artems.art/?utm_medium=copy_link"
                      >
                        <Instagram />
                      </a>
                      <a
                        className={styles["contact__info-block__social__item"]}
                        target="_blank"
                        href="https://www.facebook.com/Photography.Artems.Art/"
                      >
                        <Facebook />
                      </a>
                    </span>
                  </div>
                </div>
              </Col>
              <Col
                xs={{ order: 1, span: 12 }}
                md={{ span: 6, offset: 1, order: 2 }}
                lg={{ span: 5, offset: 1 }}
              >
                {!isSended ? (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.contact__form}
                  >
                    <Controller
                      render={(props) => (
                        <TextInput
                          grey
                          className={styles.contact__input}
                          value={props.field.value}
                          onChange={props.field.onChange}
                          errors={errors.name}
                          label="Enter your name"
                        />
                      )}
                      name="name"
                      control={control}
                      rules={{ required: true }}
                      defaultValue=""
                    />
                    <Controller
                      render={(props) => (
                        <TextInput
                          grey
                          className={styles.contact__input}
                          value={props.field.value}
                          onChange={props.field.onChange}
                          errors={errors.email}
                          label="Enter your email"
                        />
                      )}
                      control={control}
                      name="email"
                      rules={{
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line
                      }}
                      defaultValue=""
                    />
                    <Controller
                      render={(props) => (
                        <TextArea
                          grey
                          placeholder="Your message"
                          value={props.field.value}
                          onChange={props.field.onChange}
                        />
                      )}
                      control={control}
                      name="message"
                      defaultValue=""
                    />
                    <Controller
                      render={(props) => (
                        <CheckBoxInput
                          checked={props.field.value}
                          onChange={props.field.onChange}
                          className={styles.contact__checkbox}
                          errors={errors.accept}
                          label={
                            <>
                              Accept
                              <Link href="/terms-of-services">
                                <a>Terms and Conditions</a>
                              </Link>
                            </>
                          }
                          id="accept-terms"
                        />
                      )}
                      control={control}
                      rules={{ required: true }}
                      name="accept"
                      defaultValue={false}
                    />
                    <RegularButton type="submit" white>
                      Send
                    </RegularButton>
                  </form>
                ) : (
                  <p className={styles.contact__thanks}>
                    Thanks! Your message was sent. I will contact you shortly!
                  </p>
                )}
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Fade>
  );
};

export default ContactForm;
