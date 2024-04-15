import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Image = styled.div<{ background_url: string | undefined }>`
  width: 500px;
  max-height: 570px;
  margin-right: 80px;
  background-image: url(${({ background_url }) => background_url});
  max-width: 100%;
  background-position: center center;
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 1280px;
  margin: 0 auto;
  padding-top: 120px;
  padding-bottom: 120px;
`;

export const Title = styled.div`
  font-size: 32px;
  margin-bottom: 32px;
  color: #393939;
`;
export const ArtistName = styled.div`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 16px;
  color: #e0a449;
`;
export const YearsOfCreating = styled.div`
  font-size: 16px;
  line-height: 30px;
  font-weight: bold;
`;

export const MainDescriptionInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const OverviewItem = styled.div`
  font-size: 16px;
  color: #e0a449;
  font-weight: 400;
  span {
    color: #393939;
  }
`;
export const Overview = styled.div`
  font-size: 32px;
  line-height: 40px;
`;
