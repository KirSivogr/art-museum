import React from 'react';

import { Container, Spinner, Wrapper } from './styled';

export const Loader = () => {
  return (
    <Container>
      <Wrapper>
        <Spinner />
      </Wrapper>
    </Container>
  );
};
