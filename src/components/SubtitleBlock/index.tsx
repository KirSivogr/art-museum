import React from 'react';
import { InfoSubtitle, InfoTitle, SubTitleBlock } from '@components/SubtitleBlock/styled';

interface SubtitleBlockProps {
  infoTitle: string;
  infoSubtitle: string;
}

export const SubtitleBlock = ({ infoTitle, infoSubtitle }: SubtitleBlockProps) => {
  return (
    <SubTitleBlock>
      <InfoTitle>{infoTitle}</InfoTitle>
      <InfoSubtitle>{infoSubtitle}</InfoSubtitle>
    </SubTitleBlock>
  );
};
