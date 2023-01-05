import React from "react";
import styles from "./Albums.module.scss";
import cn from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { Image } from "components/UI";
import Link from "next/link";
import $api from "common/http";
import { GalleryItem } from "./Albums.props";
import { dayMonthYear } from "common/filters/date.filter";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const Albums = (): JSX.Element => {
  const [galleries, setGalleries] = React.useState([]);
  React.useEffect(() => {
    $api({
      method: "GET",
      url: `${api}/api/sessions/user`,
    })
      .then(({ data }) => {
        setGalleries(data.sessions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className={styles.albums}>
      <Container>
        {galleries.length ? (
          <>
            <Row>
              <Col xs={12}>
                <h1 className={cn(styles.albums__title, "body-1")}>
                  Available albums for you:
                </h1>
              </Col>
            </Row>
            <Row>
              {galleries &&
                galleries.map((gallery: GalleryItem) => (
                  <Col key={gallery.id} xs={12} lg={6}>
                    <Link href={`/account/albums/${gallery.id}`}>
                      <a className={styles.albums__card}>
                        <Image
                          className={styles.albums__card__img}
                          src={
                            gallery.cover !== "default_cover.png"
                              ? `${api}/storage/images/sessions/${gallery.id}/cover/${gallery.cover}`
                              : `${api}/storage/images/sessions/default_cover.png`
                          }
                        />
                        <div className={styles.albums__card__info}>
                          <h2
                            className={cn(styles.albums__card__title, "body-3")}
                          >
                            {gallery.name}
                          </h2>
                          <span
                            className={cn(
                              styles.albums__card__limit,
                              "body-3",
                              "primary-text"
                            )}
                          >
                            {gallery.package?.number_of_images} photos limit
                          </span>
                        </div>
                        {gallery.shooting_date && (
                          <span
                            className={cn(styles.albums__card__date, "body-3")}
                          >
                            {dayMonthYear(gallery.shooting_date)}
                          </span>
                        )}
                      </a>
                    </Link>
                  </Col>
                ))}
            </Row>
          </>
        ) : (
          <div className={styles.albums__empty}>
            <h2 className={cn(styles.albums__empty__title, "body-1")}>
              Your photos will appear in Albums of your Personal Cabinet after
              the photosession.
            </h2>
            <div className={styles.albums__empty__info}>
              <span className={cn(styles.albums__empty__subtitle, "body-3")}>
                You will ne notified by email when your photos are ready.
              </span>
              <p className={cn(styles.albums__empty__desc, "body-3")}>
                You will be able to choose the number of photos indicated in
                your selected package.
              </p>
              <p className={cn(styles.albums__empty__desc, "body-3")}>
                Also, you can always get extra photos for extra charge.
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Albums;
