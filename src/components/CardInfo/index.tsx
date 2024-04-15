import favIcon from 'src/assets/icon.svg';

import { useFavorite } from '@/hooks/useFavorite';

import {
  ArtistName,
  CardInformation,
  Description,
  FavoriteIcon,
  Icon,
  Status,
  Title,
} from './styled';

const truncateString = (str: string) => {
  if (str.length <= 18) {
    return str;
  }

  return `${str.slice(0, 18)}...`;
};

export interface CardInfoProps {
  imageUrl: string;
  title: string;
  artist_title: string;
  id: number;
}

export const CardInfo = ({ imageUrl, title, artist_title, id }: CardInfoProps) => {
  const { handleClickFavorite, isFav } = useFavorite(id);

  return (
    <CardInformation>
      <Description>
        <Title>{truncateString(title)}</Title>
        <ArtistName>{artist_title}</ArtistName>
        <Status>Public</Status>
      </Description>
      <Icon
        onClick={() => handleClickFavorite(id, artist_title, imageUrl, title)}
        isFav={isFav}
      >
        <FavoriteIcon src={favIcon} />
      </Icon>
    </CardInformation>
  );
};
