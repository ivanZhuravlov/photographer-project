import React from "react";
import styles from "./FirstStep.module.scss";
import { Col } from "react-bootstrap";
import cn from "classnames";
import { RegularButton } from "components/UI";
import { FirstStepProps } from "./FirstStep.props";
import { SessionItem } from "common/interfaces/SessionsProps";
import Link from "next/link";

const FirstStep = ({
  sessions,
  withSteps,
  onSessionBtnClick,
  chosenSession,
}: FirstStepProps): JSX.Element => {
  return (
    <>
      {sessions &&
        sessions.map((el: SessionItem) => (
          <Col key={el.id} lg={4} md={6}>
            <div className={styles.sessions__card}>
              <h2 className={cn(styles.sessions__card__title, "body-1")}>
                {el.name}
              </h2>
              <div className={styles.sessions__card__info}>
                <div className={styles.sessions__card__row}>
                  <span
                    className={cn(styles.sessions__card__row__title, "body-2")}
                  >
                    Duration
                  </span>
                  <span
                    className={cn(styles.sessions__card__row__answer, "body-2")}
                  >
                    {el.min_duration === el.max_duration
                      ? `${el.min_duration} minutes`
                      : `${el.min_duration}-${el.max_duration} minutes`}
                  </span>
                </div>
                <div className={styles.sessions__card__row}>
                  <span
                    className={cn(styles.sessions__card__row__title, "body-2")}
                  >
                    Number of images
                  </span>
                  <span
                    className={cn(styles.sessions__card__row__answer, "body-2")}
                  >
                    {el.number_of_images}
                  </span>
                </div>
                <div className={styles.sessions__card__row}>
                  <span
                    className={cn(styles.sessions__card__row__title, "body-2")}
                  >
                    Price
                  </span>
                  <span
                    className={cn(styles.sessions__card__row__answer, "body-2")}
                  >
                    ${el.price}
                  </span>
                </div>
              </div>
              <RegularButton
                onClick={() => onSessionBtnClick(el)}
                white
                className={cn(
                  styles.sessions__card__btn,
                  chosenSession?.id === el.id &&
                    styles.sessions__card__btn_active
                )}
              >
                {/* {!withSteps
                  ? "Book a session"
                  : chosenSession?.id === el.id
                  ? "Choosen"
                  : "Choose"} */}
                {!withSteps
                  ? "Available soon"
                  : chosenSession?.id === el.id
                  ? "Available soon"
                  : "Available soon"}
              </RegularButton>
            </div>
          </Col>
        ))}
      <span className={cn(styles.sessions__email, "body-3")}>
        If you have any questions please{" "}
        <Link href="/contacts">
          <a>email</a>
        </Link>{" "}
        me.
      </span>
    </>
  );
};

export default FirstStep;
