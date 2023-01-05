import React from "react";
import styles from "./Accordion.module.scss";
import { AccordionPropsItem } from "./Accordion.props";
import cn from "classnames";
import { RightArrow, Close } from "@/components/UI/icons";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import TransitionGroupProps from "@/common/interfaces/TransitionGroupProps";

const AccordionItem = ({
  faq,
  active,
  onToggle,
  className,
}: AccordionPropsItem): JSX.Element => {
  const { question, answer } = faq;
  const animDuration = 200;
  const svgStyle = {
    transition: `all ${animDuration}ms ease`,
    opacity: 0,
  };
  const transitionSvg: TransitionGroupProps = {
    entering: {
      opacity: 0,
    },
    entered: {
      opacity: 1,
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const contentEl = React.useRef<HTMLDivElement>(null);

  return (
    <div className={cn(styles.accordion__item, className)}>
      <button
        className={cn(
          styles.accordion__item__title,
          active && styles.accordion__item__title_active
        )}
        onClick={onToggle}
      >
        <span>{question}</span>
        <div className={styles.control}>
          <Transition in={active} timeout={animDuration}>
            {(status: TransitionStatus): JSX.Element => (
              <div
                style={{
                  ...svgStyle,
                  ...transitionSvg[status],
                }}
              >
                <Close />
              </div>
            )}
          </Transition>
          <Transition in={!active} timeout={animDuration}>
            {(status: TransitionStatus): JSX.Element => (
              <div
                style={{
                  ...svgStyle,
                  ...transitionSvg[status],
                }}
              >
                <RightArrow />
              </div>
            )}
          </Transition>
        </div>
      </button>
      <div
        ref={contentEl}
        className={styles.accordion__item__answer}
        style={{
          height: active ? contentEl.current?.scrollHeight : "0px",
          marginBottom: active ? "30px" : "0px",
        }}
      >
        <p className={styles.accordion__item__answer__text}>{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
