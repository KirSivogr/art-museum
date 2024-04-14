import { Header } from '@/components/Header';
import { Footer} from "@components/Footer";

import { GlobalStyles } from './styled';
import {FavoritesPageContent} from "@components/FavoritesPageContent";

export const FavoritesPage = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <FavoritesPageContent />
            <Footer />
        </>
    );
};