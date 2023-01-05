import { ImageProps } from "./Image.props";
import styles from "./Image.module.scss";
import cn from  "classnames";

const Image = ({ src, srcWebp, className, alt, style }: ImageProps): JSX.Element => {
  return (
    <picture style={style} className={cn(className, styles.picture)}>
      <source srcSet={srcWebp} type="image/webp" />
      <img src={src} alt={alt || 'photo'} />
    </picture>
  );
};

export default Image;
