import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logotype } from '@components/Logo';
import favIcon from 'src/assets/favIcon.png';
import home from 'src/assets/home.svg';

import {
  Container,
  Favorites,
  FavoritesIcon,
  FavoritesText,
  Home,
  HomeIcon,
  HomeText,
  Links,
  Wrapper,
} from './styled';

type HeaderProps = {
  isMainPage: boolean;
};

export const Header = ({ isMainPage }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Logotype color='white' />
        {isMainPage ? (
          <Favorites onClick={() => navigate('/favorites', { replace: false })}>
            <FavoritesIcon alt='iconFavorites' src={favIcon} />
            <FavoritesText>Your favorites</FavoritesText>
          </Favorites>
        ) : (
          <Links>
            <Home onClick={() => navigate('/', { replace: false })}>
              <HomeIcon alt='iconHome' src={home} />
              <HomeText>Home</HomeText>
            </Home>
            <Favorites onClick={() => navigate('/favorites', { replace: false })}>
              <FavoritesIcon alt='iconFavorites' src={favIcon} />
              <FavoritesText>Your favorites</FavoritesText>
            </Favorites>
          </Links>
        )}
      </Container>
    </Wrapper>
  );
};
