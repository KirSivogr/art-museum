import styled from 'styled-components';

export const CardInformation = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  background-color: white;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin-top: 5px;
`;

export const Image = styled.div<{ background_url: string | undefined }>`
  background-image: url(${({ background_url }) => background_url});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  width: 80px;
  height: 80px;
`;

export const Public = styled.div`
  font-size: 15.35px;
  font-weight: 700;
  line-height: 26.32px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #393939;
`;

export const Icon = styled.div<{ isFav: boolean }>`
  position: absolute;
  right: 0;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: ${({ isFav }) => (isFav ? '#FBD7B24D' : '#F9F9F9')};
  border-radius: 50%;
  margin-right: 10px;
`;

export const Title = styled.div`
  font-size: 17.54px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -0.03em;
  text-align: left;

  color: #333;
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

export const FavoriteIcon = styled.img`
  cursor: pointer;
  display: inline-block;
  width: 34px;
  height: 34px;
`;
