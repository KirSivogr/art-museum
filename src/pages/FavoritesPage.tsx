import { FavoritesPageContent } from '@components/PageContent/FavoritesPageContent';
import { Footer } from '@components/Footer';

import { Header } from '@/components/Header';

import { GlobalStyles } from './styled';

export const FavoritesPage = () => {
  return (
    <>
      <GlobalStyles />
      <Header isMainPage={false} />
      <FavoritesPageContent />
      <Footer />
    </>
  );
};
