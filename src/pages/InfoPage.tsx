import { useParams } from 'react-router-dom';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { InfoPageContent } from '@components/InfoPageContent';
import { Loader } from '@components/Loader';

import { useGetArtById } from '@/hooks/useGetArtById';
import { GlobalStyles } from '@/pages/styled';

export const InfoPage = () => {
  const { id } = useParams();
  const { artData, isLoading } = useGetArtById(id);

  return (
    <>
      <GlobalStyles />
      <Header isMainPage={false} />
      {artData ? (
        <InfoPageContent artData={artData} />
      ) : (
        <h2>
          {isLoading ? <Loader /> : 'Something went wrong! Please try again later!'}
        </h2>
      )}
      <Footer />
    </>
  );
};
