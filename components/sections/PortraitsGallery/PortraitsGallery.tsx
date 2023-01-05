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
import styles from "./PortraitsGallery.module.scss";
import SimpleReactLightbox from "simple-react-lightbox";
import {SRLWrapper} from "simple-react-lightbox";
import {SRLOptions} from "common/lightBoxOptions/lightBoxOptions";

const PortraitsGallery = (): JSX.Element => {
  return (
    <SimpleReactLightbox>
      <section className={styles.gallery}>
        <SRLWrapper options={SRLOptions}>
          <Container className={styles.gallery__container}>

            {/*new portraits*/}

            <SingleBlock
              src="portraits-gallery/portraits-gallery-38.jpg"
            />
            <QuadBlock
              src="portraits-gallery/portraits-gallery-40.jpg"
              srcSecond="portraits-gallery/portraits-gallery-51.jpg"
              srcThird="portraits-gallery/portraits-gallery-39.jpg"
              srcQuad="portraits-gallery/portraits-gallery-46.jpg"
            />
            <DoubleBlock
              src="portraits-gallery/portraits-gallery-53.jpg"
              srcSecond="portraits-gallery/portraits-gallery-43.jpg"
            />
            <QuadBlockSmall
              src="portraits-gallery/portraits-gallery-48.jpg"
              srcSecond="portraits-gallery/portraits-gallery-49.jpg"
              srcThird="portraits-gallery/portraits-gallery-41.jpg"
              srcQuad="portraits-gallery/portraits-gallery-52.jpg"
            />
            <SingleBlock
              src="portraits-gallery/portraits-gallery-50.jpg"
            />
            <DoubleBlock
              src="portraits-gallery/portraits-gallery-45.jpg"
              srcSecond="portraits-gallery/portraits-gallery-54.jpg"
            />
            <TripleBlock
              src="portraits-gallery/portraits-gallery-44.jpg"
              srcSecond="portraits-gallery/portraits-gallery-42.jpg"
              srcThird="portraits-gallery/portraits-gallery-47.jpg"
            />

            {/* old portraits */}

            <TripleBlock
              src="/portraits-gallery/portraits-gallery-18.jpg"
              srcSecond="/portraits-gallery/portraits-gallery-5.jpg"
              srcThird="/portraits-gallery/portraits-gallery-3.jpg"
            />
            <QuadBlock
              src="/portraits-gallery/portraits-gallery-4.jpg"
              srcSecond="/portraits-gallery/portraits-gallery-19.jpg"
              srcThird="/portraits-gallery/portraits-gallery-23.jpg"
              srcQuad="/portraits-gallery/portraits-gallery-9.jpg"
            />
            <DoubleBlock
              src="/portraits-gallery/portraits-gallery-8.jpg"
              srcSecond="/portraits-gallery/portraits-gallery-32.jpg"
            />
            <QuadBlock
              src="/portraits-gallery/portraits-gallery-10.jpg"
              srcSecond="/portraits-gallery/portraits-gallery-14.jpg"
              srcThird="/portraits-gallery/portraits-gallery-12.jpg"
              srcQuad="/portraits-gallery/portraits-gallery-2.jpg"
            />
            <SingleBlock src="/portraits-gallery/portraits-gallery-37.jpg"/>
            <DoubleBlockLarge
              src="/portraits-gallery/portraits-gallery-6.jpg"
              srcSecond="/portraits-gallery/portraits-gallery-11.jpg"
            />
            <TripleBlock
              src="/portraits-gallery/portraits-gallery-13.jpg"
              srcSecond="/portraits-gallery/portraits-gallery-35.jpg"
              srcThird="/portraits-gallery/portraits-gallery-24.jpg"
            />
            <QuadBlock
              src="/portraits-gallery/portraits-gallery-20.jpg"
              srcSecond="/portraits-gallery/portraits-gallery-1.jpg"
              srcThird="/portraits-gallery/portraits-gallery-7.jpg"
              srcQuad="/portraits-gallery/portraits-gallery-17.jpg"
            />
            <SingleBlock src="/portraits-gallery/portraits-gallery-34.jpg"/>
            <TripleBlock
              src="/portraits-gallery/portraits-gallery-31.jpg"
              srcSecond="/portraits-gallery/portraits-gallery-21.jpg"
              srcThird="/portraits-gallery/portraits-gallery-30.jpg"
            />
            <QuadBlockSmall
              src="/portraits-gallery/portraits-gallery-26.jpg"
              srcSecond="/portraits-gallery/portraits-gallery-36.jpg"
              srcThird="/portraits-gallery/portraits-gallery-25.jpg"
              srcQuad="/portraits-gallery/portraits-gallery-28.jpg"
            />
            <DoubleBlockLarge
              src="/portraits-gallery/portraits-gallery-15.jpg"
              srcSecond="/portraits-gallery/portraits-gallery-29.jpg"
            />
            <QuadBlock
              src="/portraits-gallery/portraits-gallery-27.jpg"
              srcSecond="/portraits-gallery/portraits-gallery-16.jpg"
              srcThird="/portraits-gallery/portraits-gallery-22.jpg"
              srcQuad="/portraits-gallery/portraits-gallery-33.jpg"
            />
          </Container>
        </SRLWrapper>
      </section>
    </SimpleReactLightbox>
  );
};

export default PortraitsGallery;
