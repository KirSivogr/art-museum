import React from 'react';

import museumLogo from '@/assets/museumLogo.png';

import { Logo, LogoImage, LogoName } from './styled';

export interface LogotypeProps {
  color: string;
}

export const Logotype = ({ color }: LogotypeProps) => {
  return (
    <Logo>
      <LogoImage alt='museum' src={museumLogo} />
      <LogoName color={color}>
        {' '}
        Museum of <span>Art</span>
      </LogoName>
    </Logo>
  );
};
