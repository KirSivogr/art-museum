import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArtCard } from '@components/ArtCard';
import { CardInfoWithImg } from '@components/CardInfoWithImg';
import { Pagination } from '@components/Pagination';
import { SubtitleBlock } from '@components/SubtitleBlock';
import { ErrorMessage, Formik } from 'formik';
import { debounce } from 'lodash';
import search from 'src/assets/search.png';
import * as Yup from 'yup';

import { useGetArtList } from '@/hooks/useGetArtList';
import { useGetRecommendedArtList } from '@/hooks/useGetRecommendedArtList';

import {
  Container,
  Gallery,
  Input,
  RecommendedContainer,
  SearchButton,
  StyledForm,
  Title,
  TitleBlock,
  Wrapper,
} from './styled';

const validationSchema = Yup.object().shape({
  searchQuery: Yup.string().required(),
});

export const HomePageContent = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { artList, isLoading, totalPages } = useGetArtList(query, currentPage);
  const { recommendedArtList } = useGetRecommendedArtList();
  const navigate = useNavigate();

  const handleChangePage = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearchDebounce = debounce((query: string) => {
    setQuery(query);
    setCurrentPage(1);
  }, 600);

  return (
    <Wrapper>
      <Container>
        <TitleBlock>
          <Title>
            Let&apos;s Find Some <span>Art</span>
          </Title>
          <Title>Here!</Title>
        </TitleBlock>
        <Formik
          initialValues={{ searchQuery: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            setQuery(values.searchQuery);
            resetForm();
          }}
        >
          {({ handleSubmit, values, handleChange }) => (
            <StyledForm onSubmit={handleSubmit}>
              <StyledForm>
                <Input
                  name='searchQuery'
                  placeholder='Search Art, Artist, Work...'
                  value={values.searchQuery}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    handleChange(event);
                    handleSearchDebounce(event.target.value);
                  }}
                />
                <SearchButton background_url={search} type='submit' />
              </StyledForm>
              <ErrorMessage name='search' component='div' className='error' />
            </StyledForm>
          )}
        </Formik>
        <SubtitleBlock infoTitle='Topics for you' infoSubtitle='Our special gallery' />
        <Gallery>
          {artList.map(art => (
            <ArtCard
              imageUrl={art.imageUrl}
              title={art.title}
              artist_title={art.artist_title}
              key={art.id}
              id={art.id}
              isLoading={isLoading}
              onClick={() => navigate(`artinfo/${art.id}`, { replace: false })}
            />
          ))}
        </Gallery>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handleChangePage={handleChangePage}
        />
        <SubtitleBlock infoTitle='Here some more' infoSubtitle='Other works for you' />
        <RecommendedContainer>
          <CardInfoWithImg isFavoritePage={false} recArtLists={recommendedArtList} />
        </RecommendedContainer>
      </Container>
    </Wrapper>
  );
};
