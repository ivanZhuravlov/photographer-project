import React from "react";
import { DoubleBlockProps } from "./DoubleBlock.props";
import styles from "./DoubleBlock.module.scss";
import { Image } from "components/UI";
import Fade from "react-reveal/Fade";

const DoubleBlock = ({ src, srcSecond }: DoubleBlockProps): JSX.Element => {
  return (
    <div className={styles.block}>
      <Fade bottom distance="50px" duration={700}>
        <div className={styles.block__img1}>
          <Image src={src} />
        </div>
      </Fade>
      <Fade bottom distance="50px" duration={700}>
        <div className={styles.block__img2}>
          <Image src={srcSecond} />
        </div>
      </Fade>
    </div>
  );
};

export default DoubleBlock;
