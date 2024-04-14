import React from 'react';

import { Logotype } from "@components/Logo";
import modsenLogo from "src/assets/modsenLogo.png"

import {
    Wrapper,
    Container,
    Modsen
} from './styled';

export const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Logotype color="black"/>
                <Modsen alt="Modsen" src={modsenLogo}/>
            </Container>
        </Wrapper>
    )
}