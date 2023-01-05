import React from "react";
import { QuadBlockProps } from "./QuadBlock.props";
import styles from "./QuadBlock.module.scss";
import { Image } from "components/UI";
import Fade from "react-reveal/Fade";

const QuadBlock = ({
  src,
  srcSecond,
  srcThird,
  srcQuad,
}: QuadBlockProps): JSX.Element => {
  return (
    <div className={styles.block}>
      <Fade bottom distance="50px" duration={700}>
        <div className={styles.block__img1}>
          <Image src={src} />
        </div>
      </Fade>
      <div className={styles.block__column}>
        <Fade bottom distance="50px" duration={700}>
          <div className={styles.block__img2}>
            <Image src={srcSecond} />
          </div>
        </Fade>
        <div className={styles.block__row}>
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
      </div>
    </div>
  );
};

export default QuadBlock;
