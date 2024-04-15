import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  background-color: #f5f5f5;
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 120px;
  margin-bottom: 78px;
`;

export const Title = styled.div`
  font-size: 64px;
  font-weight: bold;
  line-height: 80px;
  text-align: center;
  span {
    font-weight: bold;
    color: #f17900;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 16px;
`;

export const Input = styled(Field)`
  width: 762px;
  display: flex;
  padding: 10px;
  height: 55px;
  border: none;
  border-radius: 7px;
  margin-bottom: 10px;
  background: #3939390d;
`;

export const SearchButton = styled.button<{ background_url: string }>`
  position: absolute;
  width: 32px;
  height: 32px;
  background-image: url(${({ background_url }) => background_url});
  background-size: cover;
  border: none;
  right: 35px;
  top: 35px;
  cursor: pointer;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 120px;
`;

export const RecommendedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-bottom: 60px;
`;
