import { Header } from '@/components/Header';
import { Footer} from "@components/Footer";

import { GlobalStyles } from './styled';
import {HomePageContent} from "@components/HomePageContent";

export const HomePage = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <HomePageContent />
            <Footer />
        </>
    );
};