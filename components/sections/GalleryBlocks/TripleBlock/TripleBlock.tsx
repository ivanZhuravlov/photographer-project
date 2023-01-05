import React from "react";
import { TripleBlockProps } from "./TripleBlock.props";
import styles from "./TripleBlock.module.scss";
import { Image } from "components/UI";
import Fade from "react-reveal/Fade";

const TripleBlock = ({
  src,
  srcSecond,
  srcThird,
}: TripleBlockProps): JSX.Element => {
  return (
    <div className={styles.block}>
      <div className={styles.block__column}>
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
      <Fade bottom distance="50px" duration={700}>
        <div className={styles.block__img3}>
          <Image src={srcThird} />
        </div>
      </Fade>
    </div>
  );
};

export default TripleBlock;
