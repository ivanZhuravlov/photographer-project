import React from "react";
import { QuadBlockSmallProps } from "./QuadBlockSmall.props";
import styles from "./QuadBlockSmall.module.scss";
import { Image } from "components/UI";
import Fade from "react-reveal/Fade";

const QuadBlockSmall = ({
  src,
  srcSecond,
  srcThird,
  srcQuad,
}: QuadBlockSmallProps): JSX.Element => {
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
      <Fade bottom distance="50px" duration={700}>
        <div className={styles.block__img3}>
          <Image src={srcThird} />
        </div>
      </Fade>
      <Fade bottom distance="50px" duration={700}>
        <div className={styles.block__img4}>
          <Image src={srcQuad} />
        </div>
      </Fade>
    </div>
  );
};

export default QuadBlockSmall;
