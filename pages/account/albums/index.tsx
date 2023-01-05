import React from "react";
import { withAccountLayout } from "layouts/AccountLayout/AccountLayout";
import { Albums as AlbumsSection } from "page-components";

const Albums = (): JSX.Element => {
  return <AlbumsSection />;
};

export default withAccountLayout(Albums);
