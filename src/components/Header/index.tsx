import React from 'react';

import {useNavigate} from "react-router-dom";

import favIcon from 'src/assets/favIcon.png'
import { Logotype } from '@components/Logo'

import {
    Container,
    Wrapper,
    FavoritesText,
    FavoritesIcon,
    Favorites
} from './styled';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Logotype color="white"/>
                <Favorites  onClick={() => navigate('/favorites', { replace: false })}>
                    <FavoritesIcon alt='iconFavorites' src={favIcon} />
                    <FavoritesText>Your favorites</FavoritesText>
                </Favorites>
            </Container>
        </Wrapper>
    )
}
