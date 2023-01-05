import {
  SingleBlock,
  DoubleBlock,
  QuadBlock,
  TripleBlock,
  QuadBlockSmall,
} from "components/sections";
import React from "react";
import {Container} from "react-bootstrap";
import styles from "./PreWeddingGallery.module.scss";
import SimpleReactLightbox from "simple-react-lightbox";
import {SRLWrapper} from "simple-react-lightbox";
import {SRLOptions} from "common/lightBoxOptions/lightBoxOptions";

const PreWeddingGallery = (): JSX.Element => {
  return (
    <SimpleReactLightbox>
      <section className={styles.gallery}>
        <SRLWrapper options={SRLOptions}>
          <Container className={styles.gallery__container}>
            {/*  new*/}

            <SingleBlock src="/wedding-gallery/wedding-gallery-47.png"/>

            <TripleBlock
              src="/wedding-gallery/wedding-gallery-44.png"
              srcSecond="/wedding-gallery/wedding-gallery-52.png"
              srcThird="/wedding-gallery/wedding-gallery-60.png"
            />

            <DoubleBlock
              src="wedding-gallery/wedding-gallery-54.png"
              srcSecond="wedding-gallery/wedding-gallery-61.png"
            />

            <QuadBlock
              src="/wedding-gallery/wedding-gallery-56.png"
              srcSecond="/wedding-gallery/wedding-gallery-59.png"
              srcThird="/wedding-gallery/wedding-gallery-46.png"
              srcQuad="/wedding-gallery/wedding-gallery-63.png"
            />

            <DoubleBlock
              src="/wedding-gallery/wedding-gallery-45.png"
              srcSecond="/wedding-gallery/wedding-gallery-48.png"
            />

            <SingleBlock src="wedding-gallery/wedding-gallery-53.png"/>

            <QuadBlock
              src="wedding-gallery/wedding-gallery-49.png"
              srcSecond="wedding-gallery/wedding-gallery-50.png"
              srcThird="wedding-gallery/wedding-gallery-57.png"
              srcQuad="wedding-gallery/wedding-gallery-62.png"
            />

            <TripleBlock
              src="wedding-gallery/wedding-gallery-51.png"
              srcSecond="wedding-gallery/wedding-gallery-58.png"
              srcThird="wedding-gallery/wedding-gallery-55.png"
            />

            <QuadBlock
              src="/wedding-gallery/wedding-gallery-17.png"
              srcSecond="/wedding-gallery/wedding-gallery-26.png"
              srcThird="/wedding-gallery/wedding-gallery-19.png"
              srcQuad="/wedding-gallery/wedding-gallery-20.png"
            />

            <SingleBlock
              src="/wedding-gallery/wedding-gallery-28.png"
            />

            <QuadBlockSmall
              src="/wedding-gallery/wedding-gallery-40.png"
              srcSecond="/wedding-gallery/wedding-gallery-41.png"
              srcThird="/wedding-gallery/wedding-gallery-42.png"
              srcQuad="/wedding-gallery/wedding-gallery-43.png"
            />

            <DoubleBlock
              src="/wedding-gallery/wedding-gallery-18.png"
              srcSecond="/wedding-gallery/wedding-gallery-21.png"
            />

            <TripleBlock
              src="/wedding-gallery/wedding-gallery-27.png"
              srcSecond="/wedding-gallery/wedding-gallery-29.png"
              srcThird="/wedding-gallery/wedding-gallery-30.png"
            />

            <QuadBlockSmall
              src="/wedding-gallery/wedding-gallery-22.png"
              srcSecond="/wedding-gallery/wedding-gallery-37.png"
              srcThird="/wedding-gallery/wedding-gallery-32.png"
              srcQuad="/wedding-gallery/wedding-gallery-23.png"
            />

            <QuadBlock
              src="/wedding-gallery/wedding-gallery-34.png"
              srcSecond="/wedding-gallery/wedding-gallery-16.png"
              srcThird="/wedding-gallery/wedding-gallery-35.png"
              srcQuad="/wedding-gallery/wedding-gallery-36.png"
            />

            <DoubleBlock
              src="/wedding-gallery/wedding-gallery-31.png"
              srcSecond="/wedding-gallery/wedding-gallery-33.png"
            />

            <QuadBlockSmall
              src="/wedding-gallery/wedding-gallery-24.png"
              srcSecond="/wedding-gallery/wedding-gallery-38.png"
              srcThird="/wedding-gallery/wedding-gallery-25.png"
              srcQuad="/wedding-gallery/wedding-gallery-39.png"
            />

            {/* old */}

            <TripleBlock
              src="/wedding-gallery/wedding-gallery-1.png"
              srcSecond="/wedding-gallery/wedding-gallery-2.png"
              srcThird="/wedding-gallery/wedding-gallery-3.png"
            />
            <QuadBlockSmall
              src="/wedding-gallery/wedding-gallery-11.png"
              srcSecond="/wedding-gallery/wedding-gallery-5.png"
              srcThird="/wedding-gallery/wedding-gallery-6.png"
              srcQuad="/wedding-gallery/wedding-gallery-7.png"
            />
            <SingleBlock src="/wedding-gallery/wedding-gallery-8.png"/>
            <QuadBlock
              src="/wedding-gallery/wedding-gallery-4.png"
              srcSecond="/wedding-gallery/wedding-gallery-9.png"
              srcThird="/wedding-gallery/wedding-gallery-10.png"
              srcQuad="/wedding-gallery/wedding-gallery-12.png"
            />
            <DoubleBlock
              src="/wedding-gallery/wedding-gallery-13.png"
              srcSecond="/wedding-gallery/wedding-gallery-14.png"
            />

          </Container>
        </SRLWrapper>
      </section>
    </SimpleReactLightbox>
  );
};

export default PreWeddingGallery;
