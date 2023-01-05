import { TextButtonProps } from "./TextButton.props";
import styles from "./TextButton.module.scss";
import cn from "classnames";

const TextButton = ({
  children,
  className,
  style,
  assistance,
  onClick,
  primary,
  type
}: TextButtonProps): JSX.Element => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={cn(
          styles["text-button"],
          className,
          assistance && styles["text-button_assistance"],
          primary && styles["text-button_primary"]
        )}
        style={{ ...style }}
      >
        {children}
      </button>
    </>
  );
};

export default TextButton;
