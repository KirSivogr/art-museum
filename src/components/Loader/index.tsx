import React from 'react';

import { Spinner, LoaderContainer, Load } from './styled';

export const Loader = () => {
  return (
      <LoaderContainer>
          <Spinner />
          <Load />
      </LoaderContainer>
  );
};
