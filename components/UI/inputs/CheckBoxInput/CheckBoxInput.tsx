import React from "react";
import { CheckBoxInputProps } from "./CheckBoxInput.props";
import styles from "./CheckBoxInput.module.scss";
import cn from "classnames";

const CheckBoxInput = ({
  label,
  className,
  id,
  errors,
  ...props
}: CheckBoxInputProps): JSX.Element => {
  return (
    <div className={cn(styles["checkbox"], className)}>
      <input
        type="checkbox"
        className={cn(
          styles["checkbox__input"],
          errors && styles["checkbox__input_validation"]
        )}
        {...props}
        id={id}
      />
      {label && (
        <label
          htmlFor={id}
          className={cn(
            styles["checkbox__label"],
            "body-3",
            errors && styles["checkbox__label_validation"]
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckBoxInput;
