import React, { useState } from "react";
import styles from "./TemplateDialog.module.scss";
import { TemplateDialogProps } from "./TemplateDialog.props";
import { Image } from "components/UI";
import { PopupClose } from "components/UI/icons";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import TransitionGroupProps from "common/interfaces/TransitionGroupProps";

const TemplateDialog = ({
  children,
  firstBG,
  secondBG,
  isOpened = false,
  onClose,
  currentStepPopup,
}: TemplateDialogProps): JSX.Element => {
  const [isFirstBGVisible, setIsFirstBGVisible] = useState<boolean>(false);
  const [isSecondBGVisible, setIsSecondBGVisible] = useState<boolean>(false);
  const animDuration = 200;
  const popupStyle = {
    transition: `all ${animDuration}ms ease-in-out`,
    opacity: 0,
  };
  const transitionPopup: TransitionGroupProps = {
    entering: {
      opacity: 0,
    },
    entered: {
      opacity: 1,
      pointerEvents: "auto",
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  const transitionFirstBG: TransitionGroupProps = {
    entering: {
      opacity: 1,
    },
    entered: {
      opacity: 1,
      pointerEvents: "auto",
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0, height: 0, width: 0, backgroundColor: "#fff" },
  };
  const transitionSecondBG: TransitionGroupProps = {
    entering: {
      opacity: 0,
    },
    entered: {
      opacity: 1,
      pointerEvents: "auto",
    },
    exiting: { opacity: 1 },
    exited: { opacity: 1 },
  };
  React.useEffect(() => {
    if (isOpened) {
      setIsFirstBGVisible(true);
      setIsSecondBGVisible(false);
    } else {
      setIsSecondBGVisible(false);
      setIsFirstBGVisible(false);
    }
  }, [isOpened]);
  React.useEffect(() => {
    if (currentStepPopup === 2) {
      setIsSecondBGVisible(true);
      setIsFirstBGVisible(false);
    }
  }, [currentStepPopup]);
  return (
    <Transition in={isOpened} timeout={animDuration}>
      {(status: TransitionStatus): JSX.Element => (
        <div
          style={{
            ...popupStyle,
            ...transitionPopup[status],
          }}
          className={styles.dialog}
        >
          <Transition in={isFirstBGVisible} timeout={animDuration}>
            {(status: TransitionStatus): JSX.Element => (
              <div
                style={{
                  ...popupStyle,
                  ...transitionFirstBG[status],
                }}
              >
                {firstBG && (
                  <Image src={firstBG} className={styles["dialog__img-bg"]} />
                )}
              </div>
            )}
          </Transition>
          <Transition in={isSecondBGVisible} timeout={animDuration}>
            {(status: TransitionStatus): JSX.Element => (
              <div
                style={{
                  ...popupStyle,
                  ...transitionSecondBG[status],
                }}
              >
                {secondBG && (
                  <Image src={secondBG} className={styles["dialog__img-bg"]} />
                )}
              </div>
            )}
          </Transition>
          <div className={styles.dialog__content}>
            <PopupClose className={styles.dialog__close} onClick={onClose} />
            {children}
          </div>
        </div>
      )}
    </Transition>
  );
};

export default TemplateDialog;
