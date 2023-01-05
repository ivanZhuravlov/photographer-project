import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TopColumnImage.module.scss";
import { Image } from "components/UI";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const TopColumnImage = (): JSX.Element => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
  };
  return (
    <Fade delay={400}>
      <section className={styles["top-column-image"]}>
        <div className={styles["top-column-image__img-wrapper"]}>
          <Slider {...settings}>
            <Image
              className={styles["top-column-image__img"]}
              src={`${api}/storage/images/pages/main/main-img.png`}
              srcWebp={`${api}/storage/images/pages/main/main-img.webp`}
              alt="main-image"
            />
            <Image
              className={styles["top-column-image__img"]}
              src={`${api}/storage/images/pages/main/main-img-2.png`}
              srcWebp={`${api}/storage/images/pages/main/main-img-2.webp`}
              alt="main-image"
            />
            <Image
              className={styles["top-column-image__img"]}
              src={`${api}/storage/images/pages/main/main-img-3.png`}
              srcWebp={`${api}/storage/images/pages/main/main-img-3.webp`}
              alt="main-image"
            />
            <Image
              className={styles["top-column-image__img"]}
              src={`${api}/storage/images/pages/main/main-img-4.png`}
              srcWebp={`${api}/storage/images/pages/main/main-img-4.webp`}
              alt="main-image"
            />
          </Slider>
        </div>
        <div className={styles["top-column-image__img-m-wrapper"]}>
          <Slider {...settings}>
            <Image
              className={styles["top-column-image__img-m"]}
              src={`${api}/storage/images/pages/main/main-img-m.png`}
              srcWebp={`${api}/storage/images/pages/main/main-img-m.webp`}
              alt="main-image"
            />
            <Image
              className={styles["top-column-image__img-m"]}
              src={`${api}/storage/images/pages/main/main-img-m-2.png`}
              srcWebp={`${api}/storage/images/pages/main/main-img-m-2.webp`}
              alt="main-image"
            />
            <Image
              className={styles["top-column-image__img-m"]}
              src={`${api}/storage/images/pages/main/main-img-m-3.png`}
              srcWebp={`${api}/storage/images/pages/main/main-img-m-3.webp`}
              alt="main-image"
            />
            <Image
              className={styles["top-column-image__img-m"]}
              src={`${api}/storage/images/pages/main/main-img-m-4.png`}
              srcWebp={`${api}/storage/images/pages/main/main-img-m-4.webp`}
              alt="main-image"
            />
          </Slider>
        </div>
      </section>
    </Fade>
  );
};

export default TopColumnImage;
