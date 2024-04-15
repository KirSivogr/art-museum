import { CardInfoWithImg } from '@components/CardInfoWithImg';
import { SubtitleBlock } from '@components/SubtitleBlock';

import {
  Container,
  FavoritesContainer,
  SubTitle,
  Title,
  TitleBlock,
  Wrapper,
} from './styled';

export const FavoritesPageContent = () => {
  return (
    <Wrapper>
      <Container>
        <TitleBlock>
          <Title>Here Are Your</Title>
          <SubTitle> Favorites</SubTitle>
        </TitleBlock>
        <SubtitleBlock infoSubtitle='Your favorites list' infoTitle='Saved by you' />
        <FavoritesContainer>
          <CardInfoWithImg isFavoritePage recArtLists={[]} />
        </FavoritesContainer>
      </Container>
    </Wrapper>
  );
};
