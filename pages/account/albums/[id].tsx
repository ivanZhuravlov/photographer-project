import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { AlbumGallery } from "page-components";
import { withAccountLayout } from "layouts/AccountLayout/AccountLayout";

const AlbumId = (): JSX.Element => {
  return <AlbumGallery />;
};

export default withAccountLayout(AlbumId);

export interface AlbumsProps extends Record<string, unknown> {
  id: number;
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  try {
    return {
      props: {
        id: params.id,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/account/albums/id"],
    fallback: true,
  };
};
