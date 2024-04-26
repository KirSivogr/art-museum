import React, {useEffect, useRef, useState} from 'react';
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
  BurgerMenu,
  BurgerMenuLink,
  CloseButton,
    Overlay
} from './styled';

type HeaderProps = {
  isMainPage: boolean;
};

export const Header = ({ isMainPage }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleClickEscape);
    return () => {
      document.removeEventListener('keydown', handleClickEscape);
    };
  }, [isOpen]);

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Overlay open={isOpen} onClick={() => setIsOpen(false)} />
        <BurgerMenu open={isOpen}>
          <CloseButton onClick={toggleMenu}>X</CloseButton>
          <BurgerMenuLink onClick={() => navigate('/', { replace: false })}>
            Home
          </BurgerMenuLink>
          <BurgerMenuLink onClick={() => navigate('/favorites', { replace: false })}>
            Favorites
          </BurgerMenuLink>
        </BurgerMenu>
        <Logotype color='white' onClick={toggleMenu}/>
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
