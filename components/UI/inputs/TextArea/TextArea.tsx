import React from "react";
import { TextAreaProps } from "./TextArea.props";
import styles from "./TextArea.module.scss";
import cn from "classnames";

const TextArea = ({
  label,
  grey = false,
  placeholder,
  className,
  ...props
}: TextAreaProps): JSX.Element => {
  return (
    <div className={cn(styles["text-area"], className)}>
      {label && <label className={styles["text-area__label"]}>{label}</label>}
      <textarea
        placeholder={placeholder}
        className={cn(
          styles["text-area__input"],
          grey && styles["text-area__input_grey"]
        )}
        {...props}
      ></textarea>
    </div>
  );
};

export default TextArea;
