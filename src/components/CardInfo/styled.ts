import styled from 'styled-components';

export const CardInformation = styled.div`
  display: flex;
  height: 132px;
  justify-content: space-around;
  background-color: rgb(255, 255, 255);
  width: 90%;
  margin-left: 10px;
  padding: 12px 24px;
  position: absolute;
  bottom: -70px;
  left: 10px;
  z-index: 1;
  box-sizing: border-box;
`;

export const FavoriteIcon = styled.img`
  cursor: pointer;
  display: inline-block;
  width: 34px;
  height: 34px;
`;

export const Icon = styled.div<{ isFav: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ isFav }) => (isFav ? '#FBD7B24D' : '#F9F9F9')};
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

export const Status = styled.div`
  font-size: 1rem;
  height: 1.62rem;
  color: rgb(57, 57, 57);
  font-weight: 700;
  margin-top: 15px;
`;

export const Title = styled.div`
  font-size: 1rem;
  color: rgb(57, 57, 57);
  font-weight: 500;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArtistName = styled.div`
  font-size: 18px;
  color: #e0a449;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  display: flex;
  width: 257px;
  flex-direction: column;
  align-items: flex-start;
`;
