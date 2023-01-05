import React from "react";
import styles from "./SuccessPaymentMessage.module.scss";
import cn from "classnames";
import { Container } from "react-bootstrap";

const SuccessPaymentMessage = (): JSX.Element => {
  return (
    <Container>
      <div className={styles["success-payment-message"]}>
        <div className={styles["success-payment-message__info"]}>
          <h1
            className={cn(styles["success-payment-message__title"], "body-1")}
          >
            Thanks for booking!
          </h1>
          <p className={cn(styles["success-payment-message__desc"], "body-3")}>
            I will contact you to discuss details within 24 hours! I have sent
            you a link on email to activate your account with albums.
          </p>
          <span
            className={cn(styles["success-payment-message__email"], "body-2")}
          >
            Check your email for activation message.
          </span>
        </div>
      </div>
    </Container>
  );
};

export default SuccessPaymentMessage;
