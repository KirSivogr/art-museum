import { useNavigate } from 'react-router-dom';
import { CardInfoProps } from '@components/CardInfo';

import favIcon from '@/assets/icon.svg';
import { useFavorite } from '@/hooks/useFavorite';
import { ArtByIdWithImage } from '@/types/interfaces';

import {
  ArtistName,
  CardInformation,
  Description,
  FavoriteIcon,
  Icon,
  Image,
  Info,
  Public,
  Title,
} from './styled';

const truncateString = (str: string) => {
  if (str.length <= 19) {
    return str;
  }

  return `${str.slice(0, 19)}...`;
};

interface CardInfoWithImgProps {
  recArtLists: ArtByIdWithImage[];
  isFavoritePage: boolean;
}

export const CardInfoWithImg = ({
  recArtLists,
  isFavoritePage,
}: CardInfoWithImgProps) => {
  const { handleClickFavorite, favoritesItems } = useFavorite(undefined);
  const navigate = useNavigate();

  const resultsItems = isFavoritePage ? favoritesItems : recArtLists;

  return (
    <>
      {resultsItems.map(({ id, artist_title, imageUrl, title }: CardInfoProps) => (
        <CardInformation key={id}>
          <Image
            background_url={imageUrl}
            onClick={() => navigate(`/artinfo/${id}`, { replace: false })}
          />
          <Info>
            <Description>
              <Title>{truncateString(title)}</Title>
              <ArtistName>{artist_title}</ArtistName>
              <Public>Public</Public>
            </Description>
            <Icon
              onClick={() => handleClickFavorite(id, artist_title, imageUrl, title)}
              isFav={favoritesItems.some(item => item.id === id)}
            >
              <FavoriteIcon src={favIcon} />
            </Icon>
          </Info>
        </CardInformation>
      ))}
    </>
  );
};
