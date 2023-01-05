import {
  Image,
  RegularButton,
  TextButton,
  TemplateDialog,
} from "components/UI";
import { DeleteImage } from "components/UI/icons";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./AlbumGallery.module.scss";
import Masonry from "react-masonry-css";
import { SRLWrapper } from "simple-react-lightbox";
import { SRLOptions } from "common/lightBoxOptions/lightBoxOptions";
import SimpleReactLightbox from "simple-react-lightbox";
import cn from "classnames";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import TransitionGroupProps from "common/interfaces/TransitionGroupProps";
import AnchorLink from "react-anchor-link-smooth-scroll";
import $api from "common/http";
import { useRouter } from "next/router";
import { AlbumGalleryProps, PhotoItem } from "./AlbumGallery.props";
import { dayMonthYear } from "common/filters/date.filter";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

const breakpointColumnsObj = {
  default: 3,
  991: 2,
};

const AlbumGallery = (): JSX.Element => {
  const [album, setAlbum] = React.useState<AlbumGalleryProps>({});
  const router = useRouter();
  const [isPopupOpened, setIsPopupOpened] = React.useState<boolean>(false);
  const [choosenImages, setChoosenImages] = React.useState<PhotoItem[]>([]);
  const [isCompleteSelection, setIsCompleteSelection] =
    React.useState<boolean>(false);
  const [isLimitExceeded, setIsLimitExceeded] = React.useState<boolean>(false);
  const animDuration = 200;

  const opacityStyle = {
    transition: `all ${animDuration}ms ease-in-out`,
    opacity: 0,
    height: "0px",
    width: "0px",
  };
  const opacityStyleReverse = {
    transition: `all ${animDuration}ms ease-in-out`,
    opacity: 1,
  };

  const transitionOpacity: TransitionGroupProps = {
    entering: { opacity: 0, height: "auto", width: "auto" },
    entered: {
      opacity: 1,
      pointerEvents: "auto",
      height: "auto",
      width: "auto",
    },
    exiting: { opacity: 0, height: "auto", width: "auto" },
    exited: { opacity: 0 },
  };
  const transitionOpacityReverse: TransitionGroupProps = {
    entering: { opacity: 0, pointerEvents: "none" },
    entered: { opacity: 0, pointerEvents: "none", height: "0px", width: "0px" },
    exiting: { opacity: 1 },
    exited: { opacity: 1 },
  };

  React.useEffect(() => {
    if (!router.isReady) return;

    $api({
      method: "GET",
      url: `${api}/api/sessions/${router.query.id}`,
    })
      .then(async ({ data }) => {
        setAlbum(data.session);
      })
      .catch((err) => console.log(err));
  }, [router.isReady, router.query.id]);

  const toggleImage = (img: PhotoItem) => {
    if (choosenImages.find((el) => el === img)) {
      return setChoosenImages(choosenImages.filter((item) => item !== img));
    }
    setChoosenImages((state) => [...state, img]);
  };

  React.useEffect(() => {
    if (
      album &&
      album.package &&
      choosenImages.length > album.package?.number_of_images
    ) {
      return setIsLimitExceeded(true);
    }
    setIsLimitExceeded(false);
  }, [choosenImages, album]);

  const buildAlbum = () => {
    if (album.status === "selected") {
      return (
        <SimpleReactLightbox>
          <SRLWrapper options={SRLOptions}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={styles.album__grid}
              columnClassName={styles.album__grid__column}
            >
              {album.photos?.length &&
                album.photos.map(
                  (img: PhotoItem) =>
                    img.is_selected && (
                      <div
                        key={img.id}
                        className={cn(styles["album__img-wrapper"])}
                      >
                        <Image
                          className={cn(styles.album__img)}
                          src={`${api}/storage/images/sessions/${router.query.id}/photos/${img.name}`}
                        />
                      </div>
                    )
                )}
            </Masonry>
          </SRLWrapper>
        </SimpleReactLightbox>
      );
    }
    if (isCompleteSelection) {
      return (
        <SimpleReactLightbox>
          <SRLWrapper options={SRLOptions}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={styles.album__grid}
              columnClassName={styles.album__grid__column}
            >
              {choosenImages &&
                choosenImages.map((img: PhotoItem) => (
                  <div
                    key={img.id}
                    className={cn(styles["album__img-wrapper"])}
                  >
                    <Image
                      className={cn(styles.album__img)}
                      src={`${api}/storage/images/sessions/${router.query.id}/photos/${img.name}`}
                    />
                  </div>
                ))}
            </Masonry>
          </SRLWrapper>
        </SimpleReactLightbox>
      );
    } else if (!isCompleteSelection) {
      return (
        <SimpleReactLightbox>
          <SRLWrapper options={SRLOptions}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={styles.album__grid}
              columnClassName={styles.album__grid__column}
            >
              {album &&
                album.photos &&
                album.photos.map((img: PhotoItem) => (
                  <div
                    key={img.id}
                    className={cn(
                      styles["album__img-wrapper"],
                      choosenImages.find((el) => el === img) &&
                        styles["album__img-wrapper_active"]
                    )}
                  >
                    <button
                      onClick={() => toggleImage(img)}
                      className={styles["album__img-delete"]}
                    >
                      <DeleteImage />
                    </button>
                    <Image
                      className={cn(styles.album__img)}
                      src={`${api}/storage/images/sessions/${router.query.id}/photos/${img.name}`}
                    />
                    <RegularButton
                      black
                      className={styles["album__img-btn"]}
                      onClick={() => toggleImage(img)}
                    >
                      Select
                    </RegularButton>
                  </div>
                ))}
            </Masonry>
          </SRLWrapper>
        </SimpleReactLightbox>
      );
    }
  };

  const onClosePopup = () => {
    document.body.classList.remove("no-scroll");
    setIsPopupOpened(false);
  };

  const sendSelectedPhotos = () => {
    const photos = choosenImages.map((el) => el.id);

    $api({
      method: "PATCH",
      url: `${api}/api/photos/select`,
      data: {
        photos,
      },
    })
      .then(() => router.push("/account/albums"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {album && album.shooting_date && (
        <section className={styles.album} id="confirm-section">
          <Transition in={isCompleteSelection} timeout={animDuration}>
            {(status: TransitionStatus): JSX.Element => (
              <div
                style={{
                  ...opacityStyleReverse,
                  ...transitionOpacityReverse[status],
                }}
                className={styles["album__left-photos"]}
              >
                <Container className={styles["album__left-photos__wrapper"]}>
                  <div>
                    <p
                      className={cn(
                        styles["album__left-photos__info"],
                        "body-3"
                      )}
                    >
                      You can select{" "}
                      <span className="primary-text">
                        {choosenImages.length
                          ? `${choosenImages.length} / ${album.package?.number_of_images}`
                          : album.package?.number_of_images}{" "}
                        photos
                      </span>{" "}
                      due to your selected package.
                    </p>
                    <Transition in={isLimitExceeded} timeout={animDuration}>
                      {(status: TransitionStatus): JSX.Element => (
                        <p
                          style={{
                            ...opacityStyle,
                            ...transitionOpacity[status],
                          }}
                          className={cn(
                            styles["album__left-photos__warning"],
                            status === "entered" &&
                              styles["album__left-photos__warning_active"],
                            "body-3"
                          )}
                        >
                          You have selected more photos than indicated in your
                          package. Each additional photo costs $20
                        </p>
                      )}
                    </Transition>
                  </div>
                  <Transition
                    in={!!choosenImages.length}
                    timeout={animDuration}
                  >
                    {(status: TransitionStatus): JSX.Element => (
                      <AnchorLink offset="150" href="#confirm-section">
                        <RegularButton
                          black
                          style={{
                            ...opacityStyle,
                            ...transitionOpacity[status],
                          }}
                          onClick={() => setIsCompleteSelection(true)}
                          className={styles["album__left-photos__btn"]}
                        >
                          Complete selection
                        </RegularButton>
                      </AnchorLink>
                    )}
                  </Transition>
                </Container>
              </div>
            )}
          </Transition>
          <Container>
            <div
              className={cn(
                styles.album__info,
                isLimitExceeded &&
                  !isCompleteSelection &&
                  styles.album__info_limit,
                isCompleteSelection && styles.album__info_complete
              )}
            >
              {isCompleteSelection ? (
                <span className={cn(styles.album__info__confirm, "body-1")}>
                  Confirm selected photos
                </span>
              ) : (
                <>
                  <h1 className={cn(styles.album__title, "body-3")}>
                    {album.name}
                  </h1>
                  <span className={cn(styles.album__date, "body-3")}>
                    {dayMonthYear(album.shooting_date)}
                  </span>
                </>
              )}
            </div>
            {buildAlbum()}
            <Transition in={!!choosenImages.length} timeout={animDuration}>
              {(status: TransitionStatus): JSX.Element => (
                <div
                  style={{
                    ...opacityStyle,
                    ...transitionOpacity[status],
                  }}
                  className={styles.album__selected}
                >
                  <p className={cn(styles.album__selected__info, "body-3")}>
                    <span className="primary-text">
                      {choosenImages.length
                        ? `${choosenImages.length} / ${album.package?.number_of_images}`
                        : album.package?.number_of_images}{" "}
                      photos
                    </span>{" "}
                    selected
                  </p>
                  {isCompleteSelection ? (
                    <>
                      <p
                        className={cn(
                          styles["album__selected__extra-desc"],
                          "body-3"
                        )}
                      >
                        You will <span className="primary-text">NOT</span> be
                        able to choose extra photos after confirmation.{" "}
                      </p>
                      <RegularButton
                        black
                        className={styles["album__selected__extra-btn"]}
                        onClick={() => setIsPopupOpened(true)}
                      >
                        Confirm selection
                      </RegularButton>
                      <AnchorLink offset="150" href="#confirm-section">
                        <TextButton
                          onClick={() => setIsCompleteSelection(false)}
                          assistance
                          primary
                        >
                          Back to selection
                        </TextButton>
                      </AnchorLink>
                    </>
                  ) : (
                    <AnchorLink offset="150" href="#confirm-section">
                      <RegularButton
                        onClick={() => setIsCompleteSelection(true)}
                        black
                        className={styles.album__selected__btn}
                      >
                        Complete selection
                      </RegularButton>
                    </AnchorLink>
                  )}
                </div>
              )}
            </Transition>
          </Container>
          <TemplateDialog
            isOpened={isPopupOpened}
            firstBG="/popups/login-1.png"
            onClose={onClosePopup}
          >
            <div className="accept-selected-photos">
              <h3 className="accept-selected-photos__title body-1">
                Good choice! Your selected photos have entered the final
                processing stage.
              </h3>

              <div>
                <p className="accept-selected-photos__desc body-3">
                  After processing is complete, photos will appear in the{" "}
                  <span>Ready to download</span> tab.
                </p>
                <p className="accept-selected-photos__desc body-3">
                  You will receive a notification on email when the photos are
                  ready.
                </p>
                <p className="accept-selected-photos__desc body-3">
                  NOTICE! Finished photos will be stored for{" "}
                  <span>15 days</span> from the moment of receiving the email
                  about readiness to download photos.
                </p>
              </div>
              <RegularButton
                className="accept-selected-photos__btn"
                white
                monochrome
                onClick={sendSelectedPhotos}
              >
                Accept
              </RegularButton>
              <TextButton
                onClick={onClosePopup}
                className="accept-selected-photos__cancel-btn"
                assistance
                primary
              >
                Cancel confirmation
              </TextButton>
            </div>
          </TemplateDialog>
        </section>
      )}
    </>
  );
};

export default AlbumGallery;
