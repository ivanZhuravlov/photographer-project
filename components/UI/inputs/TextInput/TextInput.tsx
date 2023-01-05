import React from "react";
import { TextInputProps } from "./TextInput.props";
import styles from "./TextInput.module.scss";
import cn from "classnames";

const TextInput = ({
  type = "text",
  label,
  grey = false,
  placeholder,
  className,
  errors,
  ...props
}: TextInputProps): JSX.Element => {
  const value = props.value;
  const [isActive, setIsActive] = React.useState<boolean>(value ? true : false);

  React.useEffect(() => {
    if (value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [value]);

  return (
    <div className={cn(styles["text-input"], className)}>
      <input
        className={cn(
          styles["text-input__input"],
          grey && styles["text-input__input_grey"],
          errors && styles["text-input__input_validation"]
        )}
        placeholder={placeholder}
        {...props}
        type={type}
      />
      {label && (
        <label
          className={cn(
            styles["text-input__label"],
            "body-3",
            errors && styles["text-input__label_validation"],
            isActive && styles["text-input_active"]
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default TextInput;
