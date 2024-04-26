import {ArtByIdWithImage} from '@/types/interfaces';

import {
  ArtistName,
  Container,
  ContentWrapper,
  DescriptionWrapper,
  Image,
  MainDescriptionInfo,
  Overview,
  OverviewItem,
  Title,
  Wrapper,
  YearsOfCreating,
} from './styled';
import {Loader} from "@components/Loader";

interface InfoPageContentProps {
  artData: ArtByIdWithImage | null;
  isLoading: boolean;
}

export const InfoPageContent = ({ artData, isLoading } : InfoPageContentProps) => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          {isLoading
              ?
              <Loader />
              :
              <Image background_url={artData?.imageUrl} />
          }
          <DescriptionWrapper>
            <MainDescriptionInfo>
              <Title>{artData?.title}</Title>
              <ArtistName>{artData?.artist_title}</ArtistName>
              <YearsOfCreating>
                {artData?.date_start}-{artData?.date_end}
              </YearsOfCreating>
            </MainDescriptionInfo>
            <Overview>
              Overview
              <OverviewItem>
                Artist nationality: <span>{artData?.place_of_origin}</span>
              </OverviewItem>
              <OverviewItem>
                Dimensions Sheet: <span> {artData?.dimensions}</span>
              </OverviewItem>
              <OverviewItem>
                Credit Line: <span> {artData?.credit_line}</span>
              </OverviewItem>
              <OverviewItem>
                Repository: <span>{artData?.copyright_notice} </span>
              </OverviewItem>
              <OverviewItem>
                <span>Public</span>
              </OverviewItem>
            </Overview>
          </DescriptionWrapper>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};
