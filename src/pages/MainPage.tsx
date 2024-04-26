import { Footer } from '@components/Footer';
import { HomePageContent } from '@components/PageContent/HomePageContent';

import { Header } from '@/components/Header';

import { GlobalStyles } from './styled';

export const HomePage = () => {
  return (
    <>
      <GlobalStyles />
      <Header isMainPage />
      <HomePageContent />
      <Footer />
    </>
  );
};
