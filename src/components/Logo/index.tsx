import React from 'react';

import museumLogo from '@/assets/museumLogo.png';

import { Logo, LogoImage, LogoName } from './styled';

export interface LogotypeProps {
  color: string;
  onClick: () => void;
}

export const Logotype = ({ color, onClick }: LogotypeProps) => {
  return (
    <Logo onClick={onClick}>
      <LogoImage alt='museum' src={museumLogo} />
      <LogoName color={color}>
        Museum of <span>Art</span>
      </LogoName>
    </Logo>
  );
};
