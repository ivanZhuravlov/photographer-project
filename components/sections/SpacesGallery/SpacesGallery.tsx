import {
  SingleBlock,
  DoubleBlock,
  QuadBlock,
  TripleBlock,
  DoubleBlockLarge,
  QuadBlockSmall,
} from "components/sections";
import React from "react";
import {Container} from "react-bootstrap";
import styles from "./SpacesGallery.module.scss";
import SimpleReactLightbox from "simple-react-lightbox";
import {SRLWrapper} from "simple-react-lightbox";
import {SRLOptions} from "common/lightBoxOptions/lightBoxOptions";

const PortraitsGallery = (): JSX.Element => {
  return (
    <SimpleReactLightbox>
      <section className={styles.gallery}>
        <SRLWrapper options={SRLOptions}>
          <Container className={styles.gallery__container}>
            {/*  new */}

            <TripleBlock
              src="/spaces-gallery/spaces-gallery-17.png"
              srcSecond="/spaces-gallery/spaces-gallery-18.png"
              srcThird="/spaces-gallery/spaces-gallery-19.png"
            />
            <DoubleBlockLarge
              src="/spaces-gallery/spaces-gallery-20.png"
              srcSecond="/spaces-gallery/spaces-gallery-21.png"
            />
            <SingleBlock src="/spaces-gallery/spaces-gallery-28.png"/>
            <QuadBlockSmall
              src="/spaces-gallery/spaces-gallery-22.png"
              srcSecond="/spaces-gallery/spaces-gallery-23.png"
              srcThird="/spaces-gallery/spaces-gallery-24.png"
              srcQuad="/spaces-gallery/spaces-gallery-25.png"
            />
            <TripleBlock
              src="/spaces-gallery/spaces-gallery-26.png"
              srcSecond="/spaces-gallery/spaces-gallery-27.png"
              srcThird="/spaces-gallery/spaces-gallery-29.png"
            />

            {/* old  */}

            <DoubleBlock
              src="/spaces-gallery/spaces-gallery-1.png"
              srcSecond="/spaces-gallery/spaces-gallery-2.png"
            />
            <TripleBlock
              src="/spaces-gallery/spaces-gallery-3.png"
              srcSecond="/spaces-gallery/spaces-gallery-4.png"
              srcThird="/spaces-gallery/spaces-gallery-5.png"
            />
            <DoubleBlockLarge
              src="/spaces-gallery/spaces-gallery-6.png"
              srcSecond="/spaces-gallery/spaces-gallery-7.png"
            />
            <QuadBlockSmall
              src="/spaces-gallery/spaces-gallery-8.png"
              srcSecond="/spaces-gallery/spaces-gallery-9.png"
              srcThird="/spaces-gallery/spaces-gallery-10.png"
              srcQuad="/spaces-gallery/spaces-gallery-11.png"
            />
            <SingleBlock src="/spaces-gallery/spaces-gallery-16.png"/>
            <QuadBlock
              src="/spaces-gallery/spaces-gallery-12.png"
              srcSecond="/spaces-gallery/spaces-gallery-13.png"
              srcThird="/spaces-gallery/spaces-gallery-14.png"
              srcQuad="/spaces-gallery/spaces-gallery-15.png"
            />
          </Container>
        </SRLWrapper>
      </section>
    </SimpleReactLightbox>
  );
};

export default PortraitsGallery;
