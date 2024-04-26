import styled from 'styled-components';
import { Field, Form } from 'formik';
import {colors} from "@/constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0px auto;
`;

export const Wrapper = styled.div`
  background-color: ${colors.background};
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
    color: ${colors.secondary};
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 16px;
  @media (max-width: 390px) {
    margin-bottom: 10px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    margin-bottom: 10px;
  }
  @media (min-width: 769px) {
    margin-bottom: 10px;
  }
`;

export const Input = styled(Field)`
  display: flex;
  padding: 10px;
  height: 50px;
  border: none;
  border-radius: 7px;
  margin-bottom: 10px;
  background: ${colors.grey};
  @media (max-width: 390px) {
    width: 200px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    width: 342px;
  }
  @media (min-width: 769px) {
    width: 542px;
  }
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
  @media (min-width: 769px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 80px;
  }
  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 80px;
    gap: 10px;
  }
`;

export const RecommendedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-bottom: 60px;
`;
