import React from "react";
import { SingleBlockProps } from "./SingleBlock.props";
import styles from "./SingleBlock.module.scss";
import { Image } from "components/UI";
import Fade from "react-reveal/Fade";

const SingleBlock = ({ src }: SingleBlockProps): JSX.Element => {
  return (
    <div className={styles.block}>
      <Fade bottom distance="50px" duration={700}>
        <div className={styles.block__img}>
          <Image src={src} />
        </div>
      </Fade>
    </div>
  );
};

export default SingleBlock;
