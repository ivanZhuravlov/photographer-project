import React from "react";
import { PageTitle } from "components/sections";
import styles from "./InstagramGallery.module.scss";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import { Image } from "components/UI";

const InstagramGallery = (): JSX.Element => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
    autoplay: true,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles["photos-wrapper"]}>
      <Fade direction="up" delay={400} duration={650} triggerOnce>
        <PageTitle
          title={
            <>
              Check out <br /> <span>my</span> Instagram
            </>
          }
          isDesc={false}
          titleCol={6}
          hashtags={[
            {
              tag: "#ArtemsArt",
              href: "https://www.instagram.com/explore/tags/artemsart/",
            },
            {
              tag: "#ArtemDenisov",
              href: "https://www.instagram.com/explore/tags/ArtemDenisov/",
            },
          ]}
        />
        <section className={styles.photos}>
          <Container>
            <Slider className={styles.photos__gallery} {...settings}>
              <a
                target="_blank"
                href="https://www.instagram.com/artems.art/?utm_medium=copy_link"
              >
                <Image
                  className={styles.photos__gallery__img}
                  src="/instagram/img-1.jpg"
                  alt="instagram-img"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/artems.art/?utm_medium=copy_link"
              >
                <Image
                  className={styles.photos__gallery__img}
                  src="/instagram/img-2.jpg"
                  alt="instagram-img"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/artems.art/?utm_medium=copy_link"
              >
                <Image
                  className={styles.photos__gallery__img}
                  src="/instagram/img-3.jpg"
                  alt="instagram-img"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/artems.art/?utm_medium=copy_link"
              >
                <Image
                  className={styles.photos__gallery__img}
                  src="/instagram/img-4.jpg"
                  alt="instagram-img"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/artems.art/?utm_medium=copy_link"
              >
                <Image
                  className={styles.photos__gallery__img}
                  src="/instagram/img-5.jpg"
                  alt="instagram-img"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/artems.art/?utm_medium=copy_link"
              >
                <Image
                  className={styles.photos__gallery__img}
                  src="/instagram/img-6.jpg"
                  alt="instagram-img"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/artems.art/?utm_medium=copy_link"
              >
                <Image
                  className={styles.photos__gallery__img}
                  src="/instagram/img-7.jpg"
                  alt="instagram-img"
                />
              </a>
            </Slider>
          </Container>
        </section>
      </Fade>
    </div>
  );
};

export default InstagramGallery;
