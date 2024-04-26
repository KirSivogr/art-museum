import { useNavigate } from 'react-router-dom';
import { CardInfoProps } from '@components/CardsComponents/CardInfo';

import favIcon from '@/assets/icon.svg';
import { useFavorite } from '@/hooks/useFavorite';
import {Loader} from "@components/Loader";
import { ArtByIdWithImage } from '@/types/interfaces';

import {truncateString} from "@/utils/truncateString";

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

interface CardInfoWithImgProps {
  recArtLists: ArtByIdWithImage[];
  isFavoritePage: boolean;
  isLoading: boolean;
}

export const CardInfoWithImg = ({recArtLists, isFavoritePage, isLoading}: CardInfoWithImgProps) => {
  const { handleClickFavorite, favoritesItems } = useFavorite(undefined);
  const navigate = useNavigate();

  const resultsItems = isFavoritePage ? favoritesItems : recArtLists;

  return (
    <>
      {resultsItems.map(({ id, artist_title, imageUrl, title }: CardInfoProps) => (
        <CardInformation key={id}>
          {isLoading ? (
              <Loader />
          ) : (
              <Image
                  background_url={imageUrl}
                  onClick={() => navigate(`/artinfo/${id}`, { replace: false })}
              />
          )}
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
