import React from "react";
import PayPalPayment from "common/paypal/PayPalPayment/PayPalPayment";
import styles from "./ThirdStep.module.scss";
import { ThirdStepProps } from "./ThirdStep.props";

const ThirdStep = ({
  chosenSession,
  clientEmail,
}: ThirdStepProps): JSX.Element => {
  return (
    <div className={styles.sessions__payment}>
      <PayPalPayment clientEmail={clientEmail} chosenSession={chosenSession} />
    </div>
  );
};

export default ThirdStep;
