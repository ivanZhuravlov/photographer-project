import { LinkButtonProps } from "./LinkButton.props";
import styles from "./LinkButton.module.scss";
import cn from "classnames";

const LinkButton = ({
  children,
  className,
  lineHeight = 22,
  fontSize = 16,
  style,
  onClick,
}: LinkButtonProps): JSX.Element => {
  const propsStyles = {
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
  };
  return (
    <button
      className={cn(className, styles["link-button"])}
      style={{ ...propsStyles, ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LinkButton;
