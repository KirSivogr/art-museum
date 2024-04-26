import { useParams } from 'react-router-dom';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { InfoPageContent } from '@components/PageContent/InfoPageContent';

import { useGetArtById } from '@/hooks/useGetArtById';
import { GlobalStyles } from '@/pages/styled';

export const InfoPage = () => {
  const { id } = useParams();
  const { artData, isLoading } = useGetArtById(id);

  return (
    <>
      <GlobalStyles />
      <Header isMainPage={false} />
        <InfoPageContent artData={artData} isLoading={isLoading} />
      <Footer />
    </>
  );
};
