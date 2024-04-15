import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
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
  font-weight: 700;
  line-height: 80px;
  text-align: center;
`;

export const SubTitle = styled.div`
  position: relative;
  font-size: 64px;
  font-weight: 700;
  line-height: 80px;
  text-align: center;
  color: #f17900;
`;

export const FavoritesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-bottom: 60px;
`;

export const Icon = styled.img`
  position: absolute;
  width: 60px;
  height: 65px;
  top: 332px;
  left: 770px;
`;
