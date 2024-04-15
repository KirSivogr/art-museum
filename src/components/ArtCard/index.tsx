import React from 'react';
import { CardInfo } from '@components/CardInfo';
import { Loader } from '@components/Loader';

import { Card, CardImage } from './styled';

export interface ArtCardProps {
  imageUrl: string;
  title: string;
  artist_title: string;
  isLoading: boolean;
  id: number;
  onClick: () => void;
}

export const ArtCard = ({
  imageUrl,
  title,
  artist_title,
  isLoading,
  onClick,
  id,
}: ArtCardProps) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Card>
          <CardImage onClick={onClick} background_url={imageUrl} />
          <CardInfo
            id={id}
            artist_title={artist_title}
            imageUrl={imageUrl}
            title={title}
          />
        </Card>
      )}
    </>
  );
};
