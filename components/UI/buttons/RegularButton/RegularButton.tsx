import { RegularButtonProps } from "./RegularButton.props";
import styles from "./RegularButton.module.scss";
import cn from "classnames";

const RegularButton = ({
  children,
  className,
  black,
  white,
  style,
  monochrome,
  fixed,
  opacity,
  onClick,
  href,
  type,
  form,
}: RegularButtonProps): JSX.Element => {
  return (
    <>
      {opacity ? (
        <button
          style={{ ...style }}
          onClick={onClick}
          className={cn(
            styles["regular-button"],
            className,
            styles["regular-button_opacity"],
            black && styles["regular-button_black"],
            white && styles["regular-button_white"],
            fixed && styles["regular-button_fixed"],
            monochrome && styles["regular-button_monochrome"]
          )}
        >
          {children}
        </button>
      ) : href ? (
        <a
          style={{ ...style }}
          className={cn(
            styles["regular-button"],
            className,
            black && styles["regular-button_black"],
            white && styles["regular-button_white"],
            fixed && styles["regular-button_fixed"],
            monochrome && styles["regular-button_monochrome"]
          )}
          href={href}
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          style={{ ...style }}
          onClick={onClick}
          form={form}
          className={cn(
            styles["regular-button"],
            className,
            black && styles["regular-button_black"],
            white && styles["regular-button_white"],
            fixed && styles["regular-button_fixed"],
            monochrome && styles["regular-button_monochrome"]
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default RegularButton;
