import { ArtData } from '@/types/interfaces';

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

export const InfoPageContent = ({ artData }: ArtData) => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <Image background_url={artData.imageUrl} />
          <DescriptionWrapper>
            <MainDescriptionInfo>
              <Title>{artData.title}</Title>
              <ArtistName>{artData.artist_title}</ArtistName>
              <YearsOfCreating>
                {artData.date_start}-{artData.date_end}
              </YearsOfCreating>
            </MainDescriptionInfo>
            <Overview>
              Overview
              <OverviewItem>
                Artist nationality: <span>{artData.place_of_origin}</span>
              </OverviewItem>
              <OverviewItem>
                Dimensions Sheet: <span> {artData.dimensions}</span>
              </OverviewItem>
              <OverviewItem>
                Credit Line: <span> {artData.credit_line}</span>
              </OverviewItem>
              <OverviewItem>
                Repository: <span>{artData.copyright_notice} </span>
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
